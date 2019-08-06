var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function(req,res){

   res.writeHead(200,{'Content-Type':'text/plain'});
   var myReadStream = fs.createReadStream('./readStream.txt');
   myReadStream.pipe(res);
      
});

myServer.listen(1000);
console.log("Program End...");