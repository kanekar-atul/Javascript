var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function(req,res){

    res.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream('index.html');
    myReadStream.pipe(res);
    //res.end("Welcome");
});

myServer.listen(1002);