const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');


const app = express();


const playlists = [
  {
      id: 1,
      nome: 'Rock',
      capa: "../imgplaylists/Rock.jpg",
      musicas: [
          {

              id: 1,
              nome: 'Sweet Child O Mine',
              cantor: 'Guns N Rose',
              arquivo: '../musicas/Guns N Roses - Sweet Child O Mine.mp3'
          },

          {

              id: 2,
              nome: 'Smells Like Teen Spirit',
              cantor: 'Nirvana',              
              arquivo: '../musicas/Nirvana - Smells Like Teen Spirit.mp3'
          },
      ]
  },
  {
      id: 2,
      nome: 'Pop',
      capa: '../imgplaylists/Pop.png',
      musicas: [
          {

              id: 3,
              nome: 'Havana',
              cantor: 'Camila Cabelo',
              arquivo: '../musicas/Camila Cabello - Havana Ft Young Thug.mp3'
          },

          {

              id: 4,
              nome: 'Senhorita',
              cantor: 'Camila Cabelo',
              arquivo: '../musicas/Senorita Mp3 By Camila Cabello and Shawn Mendes.mp3'
          },
      ]

  },
  {
      id: 3,
      nome: 'Hiphop',
      capa:"../imgplaylists/Hiphop.jpg",
      musicas: [
          {

              id: 5,
              nome: 'Love The Way You Lie',
              cantor: 'Eminem ft. Rihanna',
              arquivo: '../musicas/Eminem - Love The Way You Lie Mp3 Song Download Ft Rihanna.mp3'
          },

          {

              id: 6,
              nome: 'Venom',
              cantor: 'Eminem',
              arquivo: '../musicas/Venom Song - Eminem.mp3'
          },
      ]

  },
  {
      id: 4,
      nome: 'Eletronica',
      capa: "../imgplaylists/Eletronica.jpg",
      musicas: [
          {

              id: 7,
              nome: 'Wake Me Up',
              cantor: 'Avicii',
              arquivo: '../musicas/Avicii - Wake Me Up (Official Video).mp3'
          },

          {
              id: 8,
              nome: 'Faded',
              cantor: 'Alan Walker',
              arquivo: '../musicas/Alan Walker - Faded.mp3'
          },
      ]

  }
]

app.use(express.json());

const usuarios = [];

// ** Playlists **
app.get('/playlists', (req, res) => {
  return res.json(playlists);
});

// app.get('/usuarios', (req, res) => {
//   const { email } = req.query;

//   const resultado = id
//   ? usuarios.filter(usuario => usuario.email.includes(email))
//   : usuarios;

//   return res.json(resultado);
// });

app.get(`/playlists/:id`, (req, res) => {
  const id = req.params.id;
  const playlist = playlists.find( (p) => p.id === parseInt(id) );
  return res.json(playlist);
});

app.post('/playlists', (req, res) => {
  const playlist = req.body;
  playlists.push(playlist);
  return res.json(playlist);
});


// ** Usuarios **
app.get('/usuarios', (req, res) => {
  return res.json(usuarios);
}); 

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  return res.json(usuario);
});

app.put('/usuarios/:id', (req, res) => {
  const { id, nome, email } = req.params;

  const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id);
  const usuario = {
    id,
    nome,
    email,
  };
  usuarios[usuarioIndex] = usuario; 

  return res.json(usuario);
});

app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  
  const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id);

  usuarios.splice(usuarioIndex, 1);

  return res.status(204).send();
})






app.listen(3001);