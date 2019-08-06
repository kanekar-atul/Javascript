/*
    Functions are the building blocks of readable,maintainable, and reusable code.
    Functions are defined using the function keyword. 
*/

//define a  function 
function test() { 
    console.log("function called") 
 } 
 //call the function 
 test();


 // Functions may be classified as Returning and Parameterized functions.

 function retStr() { 
    return "hello world!!!" ;
 }  
 var val = retStr(); 
 console.log(val);

 // Parameterized functions

 function add( n1,n2) { 
    var sum = n1 + n2 
    console.log("The sum of the values entered "+sum) 
 } 
 add(12,13);

 // Default function parameters

 function add(a, b = 1) { 
    return a+b; 
 } 
 console.log(add(4));


 // Rest Parameters

 function fun1(...params) { 
    console.log(params.length); 
 }  
 fun1();  
 fun1(5); 
 fun1(5, 6, 7,"ax"); 

//Anonymous Function
var f = function(){ return "hello"} 
console.log(f()) ;


// Example − Anonymous Parameterized Function

var func = function(x,y){ return x*y }; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product();

/*
    The Function Constructor
    The function statement is not the only way to define a new function; 
    you can define your function dynamically using Function() constructor along with the new operator.
*/

var func = new Function("x", "y", "return x*y;"); 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result)
} 
product();

// Recursion and JavaScript Functions

function factorial(num) { 
    if(num<=0) { 
       return 1; 
    } else { 
       return (num * factorial(num-1)  );
    } 
 } 
 console.log(factorial(6));

 // Example − Anonymous Recursive Function

(function() { 
   var msg = "Hello World" 
   console.log(msg)
})();


/*
  Lambda Functions
  Lambda refers to anonymous functions in programming. Lambda functions are a concise mechanism 
  to represent anonymous functions. These functions are also called as Arrow functions.

  Lambda Function - Anatomy
  There are 3 parts to a Lambda function −
    Parameters − A function may optionally have parameters.
    The fat arrow notation/lambda notation (=>): It is also called as the goes to operator.
    Statements − Represents the function’s instruction set. 

*/

var msg = ()=> { 
    console.log("function invoked") 
 } 
 msg();


 var msg = x=> { 
    console.log(x) 
 } 
 msg(10);


 /*
   Function Hoisting
   Like variables, functions can also be hoisted. Unlike variables, function declarations when hoisted, 
   hoists the function definition rather than just hoisting the function’s name.
 */

hoist_function();  
function hoist_function() { 
   console.log("foo"); 
} 

hoist_function(); // TypeError: hoist_function() is not a function  
var hoist_function = function() { 
   console.log("bar"); 
};


/*
  Immediately Invoked Function Expression
    Immediately Invoked Function Expressions (IIFEs) can be used to avoid variable hoisting from within blocks.
 It allows public access to methods while retaining privacy for variables defined within the function. 
*/

var main = function() { 
    var loop = function() { 
       for(var x = 0;x<5;x++) {
          console.log(x); 
       } 
    }(); 
    console.log("x can not be accessed outside the block scope x value is :"+x); 
 } 
 main();


 var main = function() { 
    (function() { 
       for(var x = 0;x<5;x++) { 
          console.log(x); 
       } 
    })(); 
    console.log("x can not be accessed outside the block scope x value is :"+x); 
 } 
 main();
