var express = require('express');
var app = express();

app.get('/',function(req,res){
    console.log(req);
  res.send("Hello World");
}) 



app.get('/hello', function(req, res){
    res.send("Hello!");
 });


 app.get('/new', function(req, res){
    res.send("Hello World!");
 });
 
 app.post('/new', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });


app.listen(1000);