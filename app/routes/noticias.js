module.exports = function(app){
    // Toda vez que for nessa rota, ele vai executar o que está encapsulado, ou seja, o mysql
    app.get('/noticia',function(req,res){
        var mysql = require('mysql');

        //Fazendo a conexão com o banco de dados
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '123456',
            database : 'portal_noticias'
        });

        connection.query('select * from noticias', function(erro, result){
                // res.send(result);
                res.render("noticias/noticia", {noticias : result});
        });
    
        // res.render("noticias/noticia");
    });
};

