const https = require('https');
const fs = require('fs');

const Usuario = require('../model/Usuario');

const Controller = {

    autenticarComFacebook: (req, res) => {
        console.log('req.body', req.body);
        let query = {
            facebook_id: req.body.facebook_id,
            email: req.body.email
        };
        let update = {};
        update.primeiro_nome = req.body.primeiro_nome;
        update.email = req.body.email;
        update.facebook_id = req.body.facebook_id;
        if (req.body.sobrenome) update.sobrenome = req.body.sobrenome;
        if (req.body.imagem) update.imagem = req.body.imagem;
        let options = { upsert: true, new: true, setDefaultsOnInsert: true };
        Usuario.findOneAndUpdate(query, update, options, (erro, usuario) => {
            if (erro) return console.error(erro);
            console.log('usuario', usuario);
            let imagem = fs.createWriteStream(`${ __dirname }/../publico/imagem/usuario/${ usuario._id }.jpg`);
            https.get(usuario.imagem, resposta => resposta.pipe(imagem))
            .on('error', erro => console.error(`Erro ao baixar imagem: ${ erro.message }`));
        });
        // res.send(req.body);
    }

};

module.exports = Controller;
