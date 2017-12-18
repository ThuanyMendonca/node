var express = require('express');
var app = express();

app.set('view engine', 'ejs');
// Apontando o caminho das views
app.set('views', './app/views');

module.exports = app;