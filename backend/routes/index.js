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

  // Muestra un cliente en especifico (ID)
  router.get("/clients/:idClient", clientController.showClient);

  // Actualiza Cliente
  router.put("/clients/:idClient", clientController.updateClient);

  // Elimina Cliente
  router.delete("/clients/:idClient", clientController.deleteClient);

  /////////////////////////////////
  // Operaciones para cryptos (Cryptos)
  /////////////////////////////////

  // Agrega nuevos cryptos via POST
  // router.post("/cryptos", cryptoController.newCrypto);

  //Ruta para crear nueva Crypto
  router.post("/cryptos", cryptoController.newCrypto);

  //Ruta para conseguir información de una crypto en especifico
  router.get("/cryptos/info/:symbol", cryptoController.getCrypto);

  //Ruta para buscar valor de crypto del dia de  hoy
  router.get(
    "/cryptos/values/:symbol/today",
    cryptoController.getCryptoValueToday
  );

  //Ruta para buscar valor de crypto del dia que le pases
  router.get(
    "/cryptos/values/:symbol/:date",
    cryptoController.getCryptoValueDay
  );
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
