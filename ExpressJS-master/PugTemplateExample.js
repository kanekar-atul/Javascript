var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',function(req,res){ 
  res.send("Hello World");
})  
app.get('/first_template', function(req, res){
    res.render('first_view');
 });

 app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
       name: "ExpressJS", 
       url:"http://www.google.com"
    });
 });

 app.get('/LoginSignUp_view', function(req, res){
    res.render('LoginSignUp', {
        user: {name: "Ayush", age: "20"}
    });
 });

 

app.listen(5000);