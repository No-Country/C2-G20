const Cryptos = require("../models/Cryptos");
const db = require("../config/db");

const axios = require("axios");
// exports.getCrypto = async (req, res, next) => {
//   const cryptos = {
//     BTC: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=btc&tsyms=usd",
//     ETH: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=eth&tsyms=usd",
//     DOGE: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=doge&tsyms=usd",
//   };

//   const btc = await axios.get(cryptos.BTC);
//   const eth = await axios.get(cryptos.ETH);
//   const doge = await axios.get(cryptos.DOGE);

//   try {
//     // call stored procedure
//     console.log("LLAMANDO A BTC" + btc.data.RAW.BTC.USD.TOSYMBOL);
//     db.query(
//       "CALL getcrypto(:name, :currency, :price, :highday, :lowday, :changepct24h, :lastupdate);",
//       {
//         replacements: {
//           name: btc.data.RAW.BTC.USD.FROMSYMBOL,
//           currency: btc.data.RAW.BTC.USD.TOSYMBOL,
//           price: btc.data.RAW.BTC.USD.PRICE,
//           highday: btc.data.RAW.BTC.USD.HIGHDAY,
//           lowday: btc.data.RAW.BTC.USD.LOWDAY,
//           changepct24h: btc.data.RAW.BTC.USD.CHANGEPCT24HOUR,
//           lastupdate: btc.data.DISPLAY.BTC.USD.LASTUPDATE,
//         },
//       }
//     );
//     db.query(
//       "CALL getcrypto(:name, :currency, :price, :highday, :lowday, :changepct24h, :lastupdate);",
//       {
//         replacements: {
//           name: eth.data.RAW.ETH.USD.FROMSYMBOL,
//           currency: eth.data.RAW.ETH.USD.TOSYMBOL,
//           price: eth.data.RAW.ETH.USD.PRICE,
//           highday: eth.data.RAW.ETH.USD.HIGHDAY,
//           lowday: eth.data.RAW.ETH.USD.LOWDAY,
//           changepct24h: eth.data.RAW.ETH.USD.CHANGEPCT24HOUR,
//           lastupdate: eth.data.DISPLAY.ETH.USD.LASTUPDATE,
//         },
//       }
//     );
//     db.query(
//       "CALL getcrypto(:name, :currency, :price, :highday, :lowday, :changepct24h, :lastupdate);",
//       {
//         replacements: {
//           name: doge.data.RAW.DOGE.USD.FROMSYMBOL,
//           currency: doge.data.RAW.DOGE.USD.TOSYMBOL,
//           price: doge.data.RAW.DOGE.USD.PRICE,
//           highday: doge.data.RAW.DOGE.USD.HIGHDAY,
//           lowday: doge.data.RAW.DOGE.USD.LOWDAY,
//           changepct24h: doge.data.RAW.DOGE.USD.CHANGEPCT24HOUR,
//           lastupdate: doge.data.DISPLAY.DOGE.USD.LASTUPDATE,
//         },
//       }
//     );
//     res.json({ message: "Crypto data updated successfully :b" });
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// exports.newCrypto = async (req, res, next) => {
//   try {
//     await crypto.save();
//     res.json({ message: "Crypto added successfully :b" });
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// exports.showCryptos = async (req, res, next) => {
//   try {
//     const cryptos = await Cryptos.find({});
//     res.json(cryptos);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// exports.showCrypto = async (req, res, next) => {
//   const crypto = await Cryptos.findById(req.params.idCrypto);

//   if (!crypto) {
//     res.json({ message: "Crypto doesn't exists" });
//     next();
//   }

//   res.json(crypto);
//   return;
// };

// exports.updateCrypto = async (req, res, next) => {
//   try {
//     const crypto = await Cryptos.findOneAndUpdate(
//       { _id: req.params.idCrypto },
//       req.body,
//       {
//         new: true,
//       }
//     );
//     res.json(crypto);
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

// exports.deleteCrypto = async (req, res, next) => {
//   try {
//     await Cryptos.findOneAndDelete({ _id: req.params.idCrypto });
//     res.json({ message: "Crypto has successfully deleted" });
//   } catch (error) {
//     console.log(error);
//     next();
//   }
// };

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
    const newValue = await db.query(
      `
        INSERT INTO values (value, value_max, value_min, mxn, eur, usd, date)
        VALUES ( ${usd}, ${priceMax}, ${priceMin}, ${mxn}, ${eur}, ${usd}, '${day}')
        RETURNING id_value;
        `
    );
    const newCryptoValue = await db.query(
      `
        INSERT INTO crypto_values (symbol_crypto, id_value)
        VALUES ('${symbol}', ${newValue[0][0].id_value})
        `
    );
    let value = await db.query(
      `
        SELECT * FROM values
        INNER JOIN crypto_values cv
        ON cv.id_value = values.id_value
        WHERE values.date = '${day}' AND cv.symbol_crypto = '${symbol}'
        `
    );
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
    const timestamps = await dateToTimestamps({}, date);
    const { year, month, day, dateString } = timestampsToDate(timestamps);
    const timestampsTomorrow = dateToTimestamps({
      year,
      month: parseInt(month) - 1,
      day: parseInt(day) + 1,
    });
    const timestampsTomorrowForApi = `${timestampsTomorrow}`.slice(0, -3);
    const timestampsForApi = `${timestamps}`.slice(0, -3);
    let options = {
      url: `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&limit=1&toTs=${timestampsTomorrowForApi}&api_key=${api_key}`,
      method: "get",
    };
    const valuesDay = await axios(options);
    options = {
      url: `https://min-api.cryptocompare.com/data/pricehistorical?fsym=${symbol}&tsyms=USD,EUR,MXN&ts=${timestampsForApi}&api_key=${api_key}`,
      method: "get",
    };
    const { data: valuesAll } = await axios(options);
    const { low, high } = valuesDay.data.Data.Data[1];
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
    return value;
  }

  res.send(value[0][0]);
};
