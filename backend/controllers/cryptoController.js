const Cryptos = require("../models/Cryptos");
const db = require("../config/db");

const axios = require("axios");

//Busca la info de una crypto
exports.getCrypto = async (req, res, next) => {
  const { symbol = "" } = req.params;
  const clients = await db.query(
    symbol
      ? `SELECT 
          clients.name, 
          clients.symbol_crypto,
          verified
        FROM clients 
        INNER JOIN cryptos
        ON cryptos.symbol_crypto = clients.symbol_crypto
        WHERE clients.symbol_crypto = '${symbol}' `
      : "SELECT * FROM clients"
  );
  res.send(clients[0]);
};

exports.newCrypto = async (req, res, next) => {
  const { symbol_crypto, name, email, password, verified = false } = req.body;
  const newClient = await db.query(
    `INSERT INTO clients 
      (symbol_crypto, name, email, password, verified)
    VALUES ('${symbol_crypto}','${name}','${email}','${password}', ${
      verified ? true : false
    })`
  );
  const newCrypto = await db.query(
    `INSERT INTO cryptos (symbol_crypto, name)
    VALUES ('${symbol_crypto}','${name}')
    `
  );
  res.send("OK");
};

//Retorna el dia de hoy en formato Date y timestamps
async function getDateToday() {
  const {
    year,
    month,
    day,
    dateString: today,
  } = timestampsToDate(new Date().getTime());
  const timestamps = dateToTimestamps({ year, month: month - 1, day });
  const tsTomorrow = dateToTimestamps({ year, month: month - 1, day: day + 1 });
  const dateObj = {
    today,
    timestamps,
  };
  return dateObj;
}

//Funcion que al pasarle un timestamps te devuelve el año, dia y fecha ademas un date en formato string
function timestampsToDate(timestamps, separator = "-") {
  const date = new Date(timestamps);
  const year = date.getFullYear();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dateString = [year, month, day].join(`${separator}`);
  return { year, day, month, dateString };
}

//Funcion que devuelve timestamps del año, mes y dia que le pases
function dateToTimestamps({ year, month, day }, dateString) {
  if (dateString) {
    const dateSplit = dateString.split("-");
    year = dateSplit[0];
    month = dateSplit[1] - 1;
    day = dateSplit[2];
  }
  const date = new Date(year, month, day);
  return date.getTime();
}

async function insertNewValue({
  day,
  symbol,
  priceMax,
  priceMin,
  usd,
  mxn,
  eur,
}) {
  try {
    let value = await db.query(`
      SELECT * FROM uspAddValue
      ('${symbol}', ${usd}, ${priceMin}, ${priceMax},${usd},${mxn},${eur},'${day}')
      `);
    return value;
  } catch (e) {
    console.log(e.name);
    if (e.name === "TypeError") return (value = "typeEror");
    else return (value = e.name);
  }
}

//Consigue el valor de una crypto segun el dia (Aun haciendo)
exports.getCryptoValueToday = async (req, res, next) => {
  const api_key =
    "d5d9be9bb78a96b8ea233122bac0cf8b2659f6464a8b0cecd7e23cbd855d3593";
  const { symbol } = req.params;
  const { today } = await getDateToday();
  let value = await db.query(
    `
    SELECT * FROM values
    INNER JOIN crypto_values cv
    ON cv.id_value = values.id_value
    WHERE values.date = '${today}' AND cv.symbol_crypto = '${symbol}'
    `
  );

  // Si no hay valor se busca en la api externa y se crea uno
  if (!value[0].length) {
    //hacemos una llamada a la api que nos va a traer los valores de la crypto
    const options = {
      url: `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD,EUR,MXN&api_key=${api_key}`,
      method: "get",
    };
    const resValuesToday = await axios(options);
    const { USD, MXN, EUR } = resValuesToday.data.RAW[symbol.toUpperCase()];

    //y luego hacemos una nueva insercion en la base de datos
    value = await insertNewValue({
      day: today,
      symbol,
      priceMax: USD.HIGHDAY,
      priceMin: USD.LOWDAY,
      usd: USD.PRICE,
      mxn: MXN.PRICE,
      eur: EUR.PRICE,
    });
  }

  res.send(value[0][0]);
};

function verifyDate(date) {
  if (!date.startsWith("2")) return false;
  if (!date.includes("-")) return false;
  const dateSplit = date.split("-");
  if (dateSplit.length > 3 || dateSplit.length < 3) return false;
  if (dateSplit[0].length < 4) return false;
  if (dateSplit[1] > 12) return false;
  if (dateSplit[2] > 31) return false;

  return true;
}

async function getTimestampsForApi(date) {
  const timestamps = await dateToTimestamps({}, date);
  const { year, month, day, dateString } = timestampsToDate(timestamps);
  const timestampsTomorrow = dateToTimestamps({
    year,
    month: parseInt(month) - 1,
    day: parseInt(day) + 1,
  });
  const timestampsTomorrowForApi = `${timestampsTomorrow}`.slice(0, -3);
  const timestampsForApi = `${timestamps}`.slice(0, -3);
  return { timestampsTomorrowForApi, timestampsForApi, dateString };
}

//Consigue los valores de cualquier dia
exports.getCryptoValueDay = async (req, res, next) => {
  const { symbol, date } = req.params;
  const isCorrectDate = await verifyDate(date);
  if (!isCorrectDate) return res.status(401).send({ err: "fecha incorecta" });

  let value = await db.query(
    `
    SELECT * FROM values
    INNER JOIN crypto_values cv
    ON cv.id_value = values.id_value
    WHERE values.date = '${date}' AND cv.symbol_crypto = '${symbol}'
    `
  );

  if (!value[0].length) {
    const api_key =
      "d5d9be9bb78a96b8ea233122bac0cf8b2659f6464a8b0cecd7e23cbd855d3593";
    const { timestampsTomorrowForApi, timestampsForApi, dateString } =
      await getTimestampsForApi(date);
    const { data: valuesDay } = await axios.get(
      `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=1&toTs=${timestampsTomorrowForApi}&api_key=${api_key}`
    );
    const { data: valuesAll } = await axios.get(
      `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${symbol}&tsyms=USD,EUR,MXN&ts=${timestampsForApi}&api_key=${api_key}`
    );
    const { low, high } = valuesDay.Data.Data[1];
    const {
      USD: usd,
      MXN: mxn,
      EUR: eur,
    } = valuesAll[`${symbol.toUpperCase()}`];

    value = await insertNewValue({
      day: dateString,
      symbol,
      priceMax: high,
      priceMin: low,
      usd,
      mxn,
      eur,
    });
  }

  res.send(value[0][0]);
};
