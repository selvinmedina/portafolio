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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Rutas
app.use('/api', projectRoutes);

// Exportar
module.exports = app;