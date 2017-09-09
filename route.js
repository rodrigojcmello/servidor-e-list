const router = new require('express').Router();
const Usuario = require('./controller/Usuario');

router.post('/usuario/autenticar', Usuario.autenticar);

module.exports = router;
