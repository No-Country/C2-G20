const Sequelize = require("sequelize");
const Clients = require("../models/Clients");
const Crypto_Values = require("../models/Crypto_Values");

const db = require("../config/db");

const Cryptos = db.define("cryptos", {
  symbol_crypto: {
    type: Sequelize.STRING(10),
  },
  name: {
    type: Sequelize.STRING(70),
  },
});

Cryptos.hasOne(Clients, { foreignKey: "symbol_crypto" }),
Cryptos.hasMany(Crypto_Values, { foreignKey: "symbol_crypto" });

module.exports = Cryptos;
