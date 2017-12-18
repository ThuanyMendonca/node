// var express = require('express');
// var msg = require('./modteste')() -  Executa a function; 
// var msg = require('./modteste');
var app = require('./config/server');

// Executa a function
// var a = msg();

// Executando a function que tem na variável express
// var app = express();

// app.get('/tecnologia', function(req,res){
//     /* 
//         Com node é end, com express é send
//         Com ejs é render, ele pega do views
//     */
//     res.render("secao/tecnologia");
// });

// app.get('/', function(req,res){
//     // Com node é end, com express é send
//     res.send('<html><body>Portal de Notícias</body></html>');
// });

// app.get('/index', function(req, res){
//     res.render("home/index");
// });

// app.get('/noticia',function(req,res){
//     res.render("noticias/noticia");
// });

// app.get('/formulario', function(req, res){
//     res.render("admin/form_add_noticia");
// });


var rotaNoticias = require('./app/routes/noticias')(app);
var form = require('./app/routes/formulario_inclusao')(app);
var home = require('./app/routes/home')(app);

app.listen(3000, function(){
    // console.log(a);
    console.log('Servidor ON');
});

