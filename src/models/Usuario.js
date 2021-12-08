const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  email: String,
  apelido: String,
  senha: String,
  nascimento: String,
  sexo: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);