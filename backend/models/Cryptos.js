const Sequelize = require("sequelize");
const Values = require("../models/Values");

const db = require("../config/db");

const Cryptos = db.define("cryptos", {
  symbol_crypto: {
    type: Sequelize.STRING(10),
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(70),
  },
});
module.exports = Cryptos;

Cryptos.hasMany(Values, { foreignKey: "symbol_crypto" });