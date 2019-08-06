var http = require('http');
var express = require('express');
var router = express.Router();
var app = express();
var port = 5000;
var rp =  require('request-promise');
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.set('port',port);
app.use('/user',function(req,res){
     rp('http://localhost:2000/users').then(respose=>{
        //console.log(respose);
        //res.send(JSON.stringify(respose));
        res.send(respose);
     }).catch(error=>console.log(error));  
    
});

var server = http.createServer(app); 
server.listen(port);