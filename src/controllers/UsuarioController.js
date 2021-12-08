const Usuario = require('../models/Usuario')

module.exports = {
  async index(req, res) {
    const usuarios = await Usuario.find({});
    console.log(usuarios);
    return res.json(usuarios);
  },

  async store(req, res) {
    const { email, apelido, senha, nascimento, sexo } = req.body;

    let usuario = await Usuario.findOne({ email });

    if (!usuario) {
      usuario = await Usuario.create({
        email,
        apelido,
        senha,
        nascimento,
        sexo
      })
    }   

    return res.json(usuario);
  }
};