"use strict";
x = 3.14;       // This will not cause an error.  

function myFunction() {
  "use strict";
//  y = 3.14;   // This will cause an error
}

myFunction();

const a = 10;
//a = 100;   // not possible 

x = {p1:10, p2:20};


var x = 3.14;
delete x; 


function x(p1, p1) {};   // This will cause an error
delete x; 
  
var x = 010;             // This will cause an error

var x = "\010";            // This will cause an error