const { Schema, model, models } = require("mongoose");

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
}, {
    timestamps: true
});

module.exports = models.Usuarios || model('Usuarios', UsuarioSchema)