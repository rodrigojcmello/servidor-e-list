const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    facebook_id: {
        type: Number,
        unique: true
    },
    device_key: {
        type: String
    },
    nome_completo: {
        type: String,
        required: true
    },
    primeiro_nome: {
        type: String
    },
    nome_meio: {
        type: String
    },
    sobrenome: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    imagem: {
        type: String
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
