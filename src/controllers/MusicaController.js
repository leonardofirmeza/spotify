const Musica = require("../models/Musica");


module.exports = {
  async index(req, res) {
    const musicas = await Musica.findOne({ nome });
    return res.json(musicas);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { nome, artista, duracao } = req.body;
    // const { usuario_id } = req.headers;

    const musica = await Musica.create({
      thumbnail: filename,
      nome,
      artista,
      duracao
    })

    return res.json(musica);
  }
};