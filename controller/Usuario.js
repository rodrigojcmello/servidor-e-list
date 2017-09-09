const Usuario = require('../model/Usuario');

const Controller = {

    autenticar: (req, res) => {
        console.log('req', req.body);

        let query = { 'facebook_id': req.body.facebook_id };
        let update = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            imagem: req.body.imagem,
            facebook_id: req.body.facebook_id
        };
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };

        Usuario.findOneAndUpdate(query, update, options, (err, usuario) => {
            if (err) return console.error(err);
            console.log('usuario', usuario);
        });

        // res.send(req.body);
    }

};

module.exports = Controller;
