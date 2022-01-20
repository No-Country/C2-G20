const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");
const cryptoController = require("../controllers/cryptoController");

module.exports = function () {
  //////////////////////////////////
  // Operaciones para clientes
  //////////////////////////////////

  // Agrega nuevos clientes via POST
  router.post("/clients", clientController.newClient);

  // Obtiene todos los clientes
  router.get("/clients", clientController.showClients);

  // Muestra un cliente en especifico (EMAIL)
  router.get("/clients/:email", clientController.showClient);

  // Actualiza Cliente
  router.put("/clients/:idClient", clientController.updateClient);

  // Elimina Cliente
  router.delete("/clients/:idClient", clientController.deleteClient);

  // Login Cliente
  router.post("/clients/login", clientController.loginClient);

  /////////////////////////////////
  // Operaciones para cryptos (Cryptos)
  /////////////////////////////////

  // Agrega nuevos cryptos via POST
  // router.post("/cryptos", cryptoController.newCrypto);

  //Ruta para crear nueva Crypto
  router.post("/cryptos", cryptoController.newCrypto);

  //Ruta para conseguir información de una crypto en especifico
  router.get("/cryptos/:symbol", cryptoController.getCrypto);

  //Ruta para buscar valor de crypto del dia de  hoy
  router.get("/cryptos/:symbol/today", cryptoController.getCryptoValueDay);

  // Obtiene todos los cryptos
  // router.get("/cryptos", cryptoController.showCryptos);

  // Muestra un crypto en especifico (ID)
  // router.get("/cryptos/:idCrypto", cryptoController.showCrypto);

  // Actualiza crypto
  // router.put("/cryptos/:idCrypto", cryptoController.updateCrypto);

  // Elimina crypto
  // router.delete("/cryptos/:idCrypto", cryptoController.deleteCrypto);

  return router;
};
