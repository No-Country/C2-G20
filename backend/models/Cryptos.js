const Sequelize = require("sequelize");
const db = require("../config/db");

const Cryptos = db.define("cryptos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(60),
  },
  currency: {
    type: Sequelize.STRING(60),
  },
  price: {
    type: Sequelize.DECIMAL,
  },
  highday: {
    type: Sequelize.DECIMAL,
  },
  lowday: {
    type: Sequelize.DECIMAL,
  },
  changepct24h: {
    type: Sequelize.DECIMAL,
  },
  lastupdate: {
    type: Sequelize.STRING(60),
  },
});
module.exports = Cryptos;
