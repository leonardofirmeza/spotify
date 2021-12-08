const { response } = require('express');
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://spotify:spotify@spotify.xgjxw.mongodb.net/spotify?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.listen(3001);