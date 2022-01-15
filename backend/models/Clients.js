const Sequelize = require("sequelize");
const db = require("../config/db");

const Clients = db.define("clients", {
  symbol_crypto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(70),
  },
  email: {
    type: Sequelize.STRING(70),
  },
  password: {
    type: Sequelize.STRING(70),
  },
  verified: {
    type: Sequelize.BOOLEAN,
  },
});
module.exports = Clients;
