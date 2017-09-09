const mongoose = require('mongoose');
const Usuario = require('./Usuario');

const listaSchema = new mongoose.Schema({
    titulo: {
        type: String
    },
    tipo: {
        type: String,
        required: true
    },
    membro: [{
        type: ObjectId,
        ref: 'Usuario',
        required: true
    }]
});

module.exports = mongoose.model('Sala', listaSchema);
