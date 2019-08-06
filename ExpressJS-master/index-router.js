var express = require('express');
var app = express(); 
var route =  express.Router();

route.get('/',function(req,res){
    console.log(req);
  res.send("Hello World");
})  

route.get('/hello', function(req, res){
    res.send("Hello!");
 });
 

 app.use('/things', route);

 app.listen(2000);