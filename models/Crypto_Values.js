const Sequelize = require("sequelize");
const Cryptos = require("../models/Cryptos");
const db = require("../config/db");

const Crypto_Values = db.define("crypto_values", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_value: {
    type: Sequelize.INTEGER,
  },

  symbol_crypto: {
    type: Sequelize.STRING(10),
  },
});


module.exports = Crypto_Values;