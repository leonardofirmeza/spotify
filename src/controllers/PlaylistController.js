const Playlist = require("../models/Playlist");
const Usuario = require("../models/Usuario");


module.exports = {
  async index(req, res) {
    const playlists = req.body;
    return res.json(playlists);
  },

  async store(req, res) {
    const { filename, filemusic} = req.file;
    const { nome } = req.body;
    const { usuario_id } = req.headers;

    const playlist = await Playlist.create({
      usuario: usuario_id,
      thumbnail: filename,
      nome,
      musicas: filemusic,
    })

    return res.json(playlist);
  }
};