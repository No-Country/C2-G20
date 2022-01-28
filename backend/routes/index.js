const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const cryptoController = require("../controllers/cryptoController");
const auth = require("../middleware/auth");
const path = require("path");
const emailExcelController = require("../controllers/emailExcelController");
module.exports = function () {
  //////////////////////////////////
  // Operaciones para clientes
  //////////////////////////////////

  // Agrega nuevos clientes via POST
  router.post("/clients", clientController.newClient);

  // Obtiene todos los clientes
  router.get("/clients", auth, clientController.showClients);

  // Muestra un cliente en especifico (EMAIL)
  router.get("/clients/:email", clientController.showClient);

  // Actualiza Cliente
  router.put("/clients/:idClient", clientController.updateClient);

  // Elimina Cliente
  router.delete("/clients/:idClient", clientController.deleteClient);

  // Login Cliente
  router.post("/login", clientController.authClient);

  /////////////////////////////////
  // Operaciones para cryptos (Cryptos)
  /////////////////////////////////

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

  router.post("/download/excel", emailExcelController);

  return router;
};
