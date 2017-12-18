var mysql = require('mysql');

var connMysql = function(){
    console.log('Conectado ao BD');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123456',
        database :'portal_noticias'
    });
}

module.exports = function(){
    console.log('Carregou a conexão com o BD');
    return connMysql;
}