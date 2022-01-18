const Cryptos = require("../models/Cryptos");
const db = require("../config/db");

const axios = require("axios");

exports.getCrypto = async (req, res, next) => {
  const cryptos = {
    BTC: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=btc&tsyms=usd",
    ETH: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=eth&tsyms=usd",
    DOGE: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=doge&tsyms=usd",
  };

  const btc = await axios.get(cryptos.BTC);
  const eth = await axios.get(cryptos.ETH);
  const doge = await axios.get(cryptos.DOGE);

  try {
    // call stored procedure
    db.query(
      "CALL updatecrypto(:name, :currency, :price, :highday, :lowday, :changepct24h, :lastupdate);",
      {
        replacements: {
          name: btc.data.RAW.BTC.USD.FROMSYMBOL,
          currency: btc.data.RAW.BTC.USD.TOSYMBOL,
          price: btc.data.RAW.BTC.USD.PRICE,
          highday: btc.data.RAW.BTC.USD.HIGHDAY,
          lowday: btc.data.RAW.BTC.USD.LOWDAY,
          changepct24h: btc.data.RAW.BTC.USD.CHANGEPCT24HOUR,
          lastupdate: btc.data.DISPLAY.BTC.USD.LASTUPDATE,
        },
      }
    );
    db.query(
      "CALL updatecrypto(:name, :currency, :price, :highday, :lowday, :changepct24h, :lastupdate);",
      {
        replacements: {
          name: eth.data.RAW.ETH.USD.FROMSYMBOL,
          currency: eth.data.RAW.ETH.USD.TOSYMBOL,
          price: eth.data.RAW.ETH.USD.PRICE,
          highday: eth.data.RAW.ETH.USD.HIGHDAY,
          lowday: eth.data.RAW.ETH.USD.LOWDAY,
          changepct24h: eth.data.RAW.ETH.USD.CHANGEPCT24HOUR,
          lastupdate: eth.data.DISPLAY.ETH.USD.LASTUPDATE,
        },
      }
    );
    db.query(
      "CALL updatecrypto(:name, :currency, :price, :highday, :lowday, :changepct24h, :lastupdate);",
      {
        replacements: {
          name: doge.data.RAW.DOGE.USD.FROMSYMBOL,
          currency: doge.data.RAW.DOGE.USD.TOSYMBOL,
          price: doge.data.RAW.DOGE.USD.PRICE,
          highday: doge.data.RAW.DOGE.USD.HIGHDAY,
          lowday: doge.data.RAW.DOGE.USD.LOWDAY,
          changepct24h: doge.data.RAW.DOGE.USD.CHANGEPCT24HOUR,
          lastupdate: doge.data.DISPLAY.DOGE.USD.LASTUPDATE,
        },
      }
    );

    res.json({ message: "Crypto data updated successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.newCrypto = async (req, res, next) => {
  try {
    await crypto.save();
    res.json({ message: "Crypto added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

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
