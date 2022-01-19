const Sequelize = require("sequelize");
const Crypto_Values = require("./Crypto_Values");
const db = require("../config/db");

const Values = db.define("values", {
  id_value: {
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

Values.hasMany(Crypto_Values, { foreignKey: "id_value" });

module.exports = Values;
