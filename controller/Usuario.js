const Usuario = require('../model/Usuario');

const Controller = {

    autenticarComFacebook: (req, res) => {
        console.log('req.body', req.body);
        // let query = {
        //     facebook_id: req.body.facebook_id,
        //     email: req.body.email
        // };
        // let update = {};
        // update.primeiro_nome = req.body.nome;
        // update.email = req.body.email;
        // update.facebook_id = req.body.facebook_id;
        // if (req.body.sobrenome) update.sobrenome = req.body.sobrenome;
        // if (req.body.imagem) update.imagem = req.body.imagem;
        // let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        // Usuario.findOneAndUpdate(query, update, options, (err, usuario) => {
        //     if (err) return console.error(err);
        //     console.log('usuario', usuario);
        // });
        // res.send(req.body);
    }

};

module.exports = Controller;
