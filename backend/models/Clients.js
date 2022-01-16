const Sequelize = require("sequelize");
const Cryptos = require("../models/Cryptos");
const db = require("../config/db");
const bcrypt = require("bcrypt");

const Clients = db.define(
  "clients",
  {
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
  },
  {
    hooks: {
      beforeCreate: (client) => {
        client.password = bcrypt.hashSync(
          client.password,
          bcrypt.genSaltSync(10)
        );
      },
    },
  }
);

Clients.prototype.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

Clients.hasOne(Cryptos, { foreignKey: "symbol_crypto" });




module.exports = Clients;
