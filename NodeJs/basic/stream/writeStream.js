var fs = require('fs');

var myReadStream  = fs.createReadStream('./readStream.txt');
var myWriteStream = fs.createWriteStream('./writeStream.txt');

myReadStream.on('data',function(chunk){
   console.log('Data Received..');
   console.log(chunk);

   if(chunk !=null){
     myWriteStream.write(chunk);
   }

});