var http = require('http');
var fs = require('fs');
var template = require('./example');
template.template();
var myServer = http.createServer(function(req,res){ 
  //  var writeStream = fs.createWriteStream('./reqObj.txt');
  //  writeStream.write(JSON.stringify(req));

    console.log(req.url);
    if(res.url === '/about'){
        fs.createReadStream('./basicRouting/about.html').pipe(res);
    }else{
      fs.createReadStream('./basicRouting/contact.html').pipe(res);
    }
});

myServer.listen(1005);