const Sequelize = require("sequelize");
const db = require("../config/db");

const Values = db.define("values", {
  symbol_crypto: {
    type: Sequelize.STRING(10),
    primaryKey: true,
  },
  value: {
    type: Sequelize.FLOAT(5, 5),
  },
  value_max: {
    type: Sequelize.FLOAT(5, 5),
  },
  value_min: {
    type: Sequelize.FLOAT(5, 5),
  },
  change_rate: {
    type: Sequelize.INTEGER,
  },
  mxn: {
    type: Sequelize.FLOAT(5, 5),
  },
  usd: {
    type: Sequelize.FLOAT(5, 5),
  },
  eur: {
    type: Sequelize.FLOAT(5, 5),
  },
  date: {
    type: Sequelize.DATE,
  },
});
module.exports = Values;
