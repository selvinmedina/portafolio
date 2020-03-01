'use strict';

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://selvin:1234@selvin-34yz6.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log('Conexion a la base de datos establecida con satisfactoriamente!');
        // Creacion del servidor
        app.listen(port, () => {
            console.log('Servidor corriendo correctamente en la URL: localost:' + port);
        });
    })
    .catch(error => console.log(error));
