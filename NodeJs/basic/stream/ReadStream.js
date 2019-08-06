var http = require('http');

var fs = require('fs');

var myStream = fs.createReadStream('./test.txt','utf8');

myStream.on('data',function(chunk){
   console.log("Data Received..");
   console.log(chunk);
});


console.log("Program End...!!!");