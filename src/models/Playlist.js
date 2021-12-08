const mongoose = require('mongoose'); 

const PlaylistSchema = new mongoose.Schema({
  thumbnail: String,
  nome: String,
  musicas: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

module.exports = mongoose.model('Playlist', PlaylistSchema);