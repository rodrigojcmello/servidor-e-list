const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    facebook_id: {
        type: Number,
        unique: true
    },
    device_key: {
        type: String
    },
    nome: {
        type: String,
        required: true
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
