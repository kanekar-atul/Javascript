var express = require('express');
var app = express();
 


app.get('/hello/:id', function(req, res){
    res.send("ID = "+ req.params.id);
 });

 
app.get('/things/:name/:id', function(req, res) {
  res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});


app.get('*', function(req, res){
  res.send('Sorry, this is an invalid URL.');
});

app.listen(1000);