var http = require('http');

var myserver = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application/json','Author':'Atul K'});

    var myObj = {
        "name" : "Atul K",
        "country" : "India"
    }
    res.end( JSON.stringify(myObj));
});

myserver.listen(1003);