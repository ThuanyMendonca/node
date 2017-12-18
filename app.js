var express = require('express');
// Executando a function que tem na variável express
var app = express();

app.set('view engine','ejs');

app.get('/tecnologia', function(req,res){
    /* 
        Com node é end, com express é send
        Com ejs é render, ele pega do views
    */
    res.render("secao/tecnologia");
});

// app.get('/', function(req,res){
//     // Com node é end, com express é send
//     res.send('<html><body>Portal de Notícias</body></html>');
// });

app.get('/index', function(req, res){
    res.render("home/index");
});

app.get('/noticia',function(req,res){
    res.render("noticias/noticia");
});

app.get('/formulario', function(req, res){
    res.render("admin/form_add_noticia");
});

app.listen(3000, function(){
    console.log("Servidor escutando na porta 3000 com express");
});