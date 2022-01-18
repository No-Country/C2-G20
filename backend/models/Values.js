const Sequelize = require("sequelize");
const db = require("../config/db");

const Values = db.define("values", {
  symbol_crypto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(70),
  },
});
module.exports = Values;
