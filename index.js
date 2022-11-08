var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.post('/', async(req, res) => {

  var nombre = req.body.nombre;
  var email = req.body.email;

  var obj = {
    to: 'violetaa.zarabozo@gmail.com',
    subject: 'SUSCRIPCIÓN WEB',
    html: nombre + " se suscribió en 'Tu mundo Argentino' para recibir info. a su correo: " + email 
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth:{
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transporter.sendMail(obj);

  res.render('index', {
    message: 'Te has suscripto correctamente, muchas gracias ♡',
  });


});

module.exports = router;