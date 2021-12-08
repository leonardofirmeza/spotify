const mongoose = require('mongoose');

const MusicaSchema = new mongoose.Schema({
  thumbnail: String,
  nome: String,
  artista: String,
  duracao: Number
});

module.exports = mongoose.model('Musica', MusicaSchema);