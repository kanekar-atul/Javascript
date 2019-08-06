/*
    A loop represents a set of instructions that must be repeated.
    In a loop’s context, a repetition is termed as an iteration.
*/


/*
	The ‘for’ loop
    The for loop executes the code block for a specified number of times.
*/

var num = 5 
var factorial = 1; 
for( let i = num ; i >= 1; i-- ) { 
   factorial *= i ; 
} 
console.log(factorial);


/*
    The for…in loop
    The for...in loop is used to loop through an object's properties.
*/

var obj = {a:1, b:2, c:3};  
for (var prop in obj) { 
   console.log(obj[prop]); 
}

/*
    The for…of loop
    The for…of loop is used to iterate iterables instead of object literals.
*/

for (let val of[12 , 13 , 123]) {   
    console.log(val) 
 } 