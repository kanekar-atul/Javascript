/*
An indefinite loop is used when the number of iterations in a loop is indeterminate or unknown.
*/

/*
  The while loop
  The while loop executes the instructions each time the condition specified evaluates to true.
*/

var num = 5; 
var factorial = 1; 

while(num >= 1) { 
   factorial = factorial * num; 
   num--; 
} 
console.log("The factorial  is "+factorial); 

/*
	The do…while loop
    The do…while loop is similar to the while loop except that the do...while loop doesn’t evaluate
    the condition for the first time the loop executes.
*/

var n = 10;   
do { 
   console.log(n); 
   n--; 
} 
while(n>=0); 


/*
	The break statement
    The break statement is used to take the control out of a construct.
*/

var i = 1 
while(i<= 10) { 
   if (i % 5 == 0) {   
      console.log("The first multiple of 5  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   i++ 
}


var num = 0 
var count = 0; 
for(num = 0;num<= 20;num++) { 
   if (num % 2 == 0) { 
      continue 
   } 
   count++ 
} 
console.log(" The count of odd values between 0 and 20 is: "+count) 