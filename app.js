'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Rutas archivos rutas
var projectRoutes = require('./routes/project');
// Moddlewares : Capa que se ejecuta antes de ejecutar la accion de un controlador

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //Cualquier peticion la convierte en JSON

// CORS

// Rutas
app.use('/api', projectRoutes);

// Exportar
module.exports = app;