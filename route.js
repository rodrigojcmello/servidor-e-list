const router = new require('express').Router();
const Usuario = require('./controller/Usuario');

router.post('/usuario/autenticar/facebook', Usuario.autenticarComFacebook);

module.exports = router;
