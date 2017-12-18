var http = require('http');

// Criando servidor
http.createServer(function(req,res){
    // Respondendo as requisições
    var categoria = req.url;
    if (categoria == '/tecnologia'){
        res.end("<html><body>Tecnologia</body></html>");    
    }
    else if(categoria == '/moda'){
        res.end("<html><body>Moda</body></html>");    
    }
    else if(categoria == '/beleza'){
        res.end("<html><body>Moda</body></html>");    
    }
    else{
    //Enviando resposta
    res.end("<html><body>Portal de notícias</body></html>");
    }
}).listen(3000);

/*
    Pode criar uma variável para receber a function com o http.createServe
    e colocar variavel.listen(porta)
*/

