// var msg = "Este módulo contém apenas uma String";

/* 
    Exportando o módulo que tem 
    a variável msg para o app.js (pois tem a requisição dele)
*/
// module.exports = msg;

module.exports = function(){
    var msg = "Este módulo contém apenas uma String";
    return msg;    
}