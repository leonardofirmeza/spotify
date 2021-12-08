const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const UsuarioController = require('./controllers/UsuarioController');
const MusicaController =  require('./controllers/MusicaController');
const PlaylistController = require('./controllers/PlaylistController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/usuarios', UsuarioController.store);
routes.post('/musicas', upload.single('thumbnail'), MusicaController.store);
routes.post('/playlists', upload.single('thumbnail'), PlaylistController.store);

routes.get('/playlists', PlaylistController.index),
routes.get('/usuarios', UsuarioController.index)

module.exports = routes;