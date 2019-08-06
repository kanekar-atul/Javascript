const express = require('express');
const app  = express();

const mysql = require('mysql');


 
var conn=mysql.createConnection({
    host:'localhost',  
    user:'root',
    password:'admin',
    database:'mydb'
  },() => console.log('Database Connected...!!!'));
   

  conn.connect(function(error){
    if(!!error){
      console.log(error); 
    }else{
      console.log('Connected!:)');    
    }
  });
  
module.exports = conn;