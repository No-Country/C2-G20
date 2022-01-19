const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

const Clients = db.define(
  "clients",
  {
    symbol_crypto: {
      type: Sequelize.STRING(10),
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

module.exports = Clients;
