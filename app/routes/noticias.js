// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
    
    

    // Toda vez que for nessa rota, ele vai executar o que está encapsulado, ou seja, o mysql
    app.get('/noticia',function(req,res){
        
        var connection = app.config.dbConnection();

        connection.query('select * from noticias', function(erro, result){
                // res.send(result);
                res.render("noticias/noticia", {noticias : result});
        });
    
        // res.render("noticias/noticia");
    });
};

