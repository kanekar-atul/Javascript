/*
   JavaScriptVariable Scope
        The scope of a variable is the region of your program in which it is defined.
        Traditionally, JavaScript defines only two scopes-global and local.
        Global Scope :− A variable with global scope can be accessed from within any part of the 
                        JavaScript code.
        Local Scope :−  A variable with a local scope can be accessed from within a function where 
                        it is declared.

*/

"use strict" ;

console.log("\n Example : Global vs. Local Variable \n");
var num = 10 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num);
} 
console.log("value of num outside test() "+num); 
test();


function test() { 
   var num = 100;
   //console.log("value of num in test() "+num);
   { 
      console.log("Inner Block begins") ;
      let num = 200 ;
      console.log("value of num : "+num) ; 
   }; 


} 
test();


/*
    The const declaration creates a read-only reference to a value. It does not mean the value it holds is 
    immutable, just that the variable identifier cannot be reassigned.
*/

const x = 10 ;
x = 12; // will result in an error!!


