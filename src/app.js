const express = require('express');
const cors = require('cors');

const app = express();

// configuración de la app
app.use(cors());
app.use(express.json());

// rutas
app.use('/api', require('./routes/api'));

module.exports = app;