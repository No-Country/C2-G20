const Cryptos = require("../models/Cryptos");
const db = require("../config/db");

const axios = require("axios");

enzo;

exports.showCryptos = async (req, res, next) => {
  try {
    const cryptos = await Cryptos.find({});
    res.json(cryptos);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showCrypto = async (req, res, next) => {
  const crypto = await Cryptos.findById(req.params.idCrypto);

  if (!crypto) {
    res.json({ message: "Crypto doesn't exists" });
    next();
  }

  res.json(crypto);
  return;
};

exports.updateCrypto = async (req, res, next) => {
  try {
    const crypto = await Cryptos.findOneAndUpdate(
      { _id: req.params.idCrypto },
      req.body,
      {
        new: true,
      }
    );
    res.json(crypto);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteCrypto = async (req, res, next) => {
  try {
    await Cryptos.findOneAndDelete({ _id: req.params.idCrypto });
    res.json({ message: "Crypto has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getCrypto = async (req, res, next) => {
  const { symbol = "" } = req.params;
  const clientes = await db.query(
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
  res.send(clientes[0]);
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

async function getDateToday(toFormat) {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const timestamps = await new Date(year, month - 1, day).getTime();
  const tsTomorrow = new Date(year, month - 1, day + 1).getTime();
  const dateObj = {
    year,
    day,
    month,
    dateFormat: [year, month, day].join("-"),
    timestamps,
    tsTomorrow,
  };
  return dateObj;
}

exports.getCryptoValueDay = async (req, res, next) => {
  const api_key =
    "d5d9be9bb78a96b8ea233122bac0cf8b2659f6464a8b0cecd7e23cbd855d3593";
  const { symbol } = req.params;
  const date = await getDateToday(true);
  let value;
  try {
    today = date.dateFormat;
    value = await db.query(
      `
      SELECT * FROM values
      INNER JOIN crypto_values cv
      ON cv.id_value = values.id_value
      WHERE values.date = '${today}' AND cv.symbol_crypto = '${symbol}'
      `
    );
    if (!value[0].length) {
      const url = `https:min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD,EUR,MXN&toTs=${date.tsTomorrow}&api_key=${api_key}`;
      const resdivisasToday = await axios({ url, method: "get" });
      const { USD, MXN, EUR } = resdivisasToday.data.RAW[symbol.toUpperCase()];
      const { PRICE, HIGHDAY, LOWDAY } = USD;
      const newValue = await db.query(
        `
        INSERT INTO values (value, value_max, value_min, mxn, eur, usd, date)
        VALUES ( ${PRICE}, ${HIGHDAY}, ${LOWDAY}, ${MXN.PRICE}, ${EUR.PRICE}, ${PRICE}, '${today}')
        RETURNING id_value;
        `
      );
      const newCryptoValue = await db.query(
        `
        INSERT INTO crypto_values (symbol_crypto, id_value)
        VALUES ( '${symbol}' , ${newValue[0][0].id_value})
        `
      );
      const selectNew = await db.query(
        `
        SELECT * FROM values
        INNER JOIN crypto_values cv
        ON cv.id_value = values.id_value
        WHERE values.date = '${today}' AND cv.symbol_crypto = '${symbol}'
        `
      );
      return res.send(selectNew[0][0]);
    }
  } catch (e) {
    console.log("el errooor", e.name);
    if (e.name === "TypeError") res.status(404).send("typeError");
  }

  res.send(value[0][0]);
};
