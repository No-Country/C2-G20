const Clients = require("../models/Clients");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "vars.env" });

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
    const clients = await Clients.find({});
    res.json(clients);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.showClient = async (req, res, next) => {
  const client = await Clients.findById(req.params.email);

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
