var http = require('http');

var server = http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("Welcome In NodeJS Server");
});

server.listen(1000);

 