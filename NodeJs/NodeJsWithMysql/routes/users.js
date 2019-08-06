var express = require('express');
var router = express.Router();
var connObj = require('./connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var sql1 = "select * from user";  
  connObj.query(sql1, function(err, results) {
        if (err) throw err;
        console.log("Result "+results); 
        res.end( JSON.stringify(results)); 
      });
    
});


router.get('/adduser', function(req, res, next) {
   
  var sql = "INSERT INTO user (name, city,zipcode,contactno) VALUES ('Adam', 'orlando','232332323','23333333333')";
  connObj.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  }); 

});


router.delete('/deleteuser',function(req, res, next){
  console.log("1 record delete.");
  console.log(req.body);
  var obj = JSON.parse(data);
  var sql = "delete * from user where name ='"+obj.name+"'";
  console.log(sql);
  connObj.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  }); 

});


module.exports = router;
