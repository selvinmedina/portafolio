'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    descripcion: String,
    category: String,
    year: Number,
    langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema); // projects --> guarda los documents en la coleccion
