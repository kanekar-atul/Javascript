"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;   


var arguments = 3.14;    // This will cause an error

with (Math){x = cos(2)}; // This will cause an error

eval ("var x = 2");
alert (x);             // This will cause an error

function myFunction() {
    alert(this); // will alert "undefined"
  }
  myFunction();
 
var public = 1500;      // This will cause an error