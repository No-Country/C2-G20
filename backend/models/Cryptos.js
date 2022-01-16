const Sequelize = require("sequelize");
const db = require("../config/db");

const Cryptos = db.define("cryptos", {
  name: {
    type: Sequelize.STRING(70),
  },
});
module.exports = Cryptos;
