var express = require('express');
var consign = require('consign');

var app = express();

app.set('view engine', 'ejs');
// Apontando o caminho das views
app.set('views', './app/views');

//Carregando todas as rotas que tem no arquivo routes
consign()
.include('app/routes')
//Precisa apontar a extensão .js
.then('config/dbConnection.js')
.into(app);

//Carregando o BD em todos

module.exports = app;