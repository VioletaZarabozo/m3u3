var nodemailer = require("nodemailer");
router.post('/', async(req, res, next) => {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var obj = {
    to: 'violetaa.zarabozo@gmail.com',
    subject: 'CONTACTO WEB',
    html: "Acabas de suscribirte a través de la web para recibir más información a tu correo: " + email + ". <br> Gracias por tu suscripción " + name + "♡"
  }
  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  var info = await transport.sendMail(obj);
  res.render('inicio', {
    message: 'Mensaje enviado correctamente'
  });
});

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
  res.render('inicio');
});

module.exports = router;