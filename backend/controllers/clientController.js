const Clients = require("../models/Clients");
<<<<<<< HEAD
=======
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "vars.env" });
>>>>>>> 489bf477b2b20af6009ab34bc93ed9a28a7f8e55

exports.newClient = async (req, res, next) => {
  const client = new Clients(req.body);
  try {
    await client.save();

    res.json({ message: "Client added successfully :b" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showClients = async (req, res, next) => {
  try {
<<<<<<< HEAD
    const clients = await Clients.find({});
=======
    const clients = await Clients.findAll({});
>>>>>>> 489bf477b2b20af6009ab34bc93ed9a28a7f8e55
    res.json(clients);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showClient = async (req, res, next) => {
<<<<<<< HEAD
  const client = await Clients.findById(req.params.idClient);
=======
  const client = await Clients.findById(req.params.email);
>>>>>>> 489bf477b2b20af6009ab34bc93ed9a28a7f8e55

  if (!client) {
    res.json({ message: "Client doesn't exists" });
    next();
  }

  res.json(client);
  return;
};

exports.authClient = async (req, res, next) => {
  const { email, password } = req.body;
  const client = await Clients.findOne({ where: { email: email } });

  if (!client) {
    await res.status(401).json({ message: "Client doesn't exists" });
    next();
  } else {
    if (!bcrypt.compareSync(password, client.password)) {
      await res.status(401).json({ message: "Incorrect password" });
      next();
    } else {
      const token = jwt.sign(
        { email: client.email, id: client.symbol_crypto },
        "G20-Crypto-Wallet",
        {
          expiresIn: "1h",
        }
      );
      res.json({ token });
    }
  }
};

exports.updateClient = async (req, res, next) => {
  try {
    const client = await Clients.update(
      { symbol_crypto: req.params.symbol },
      req.body,
      {
        new: true,
      }
    );
    res.json(client);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deleteClient = async (req, res, next) => {
  try {
    await Clients.findOneAndDelete({ _id: req.params.idClient });
    res.json({ message: "Client has successfully deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};
