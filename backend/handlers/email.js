const nodemailer = require("nodemailer");
const emailConfig = require("../config/email");

let transport = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: {
    user: emailConfig.user,
    pass: emailConfig.pass,
  },
});

exports.sendEmail = async (options) => {
  let mailOptions = {
    from: "Grupo20 <no-reply@grupo20.com>",
    to: options.user.email,
    subject: options.subject,
    attachments: options.attachments,
    text: options.text,
  };
  transport.sendMail(mailOptions, (err, info) => {
    if (err) console.error(err);
    return console.log("correo enviado");
  });
};
