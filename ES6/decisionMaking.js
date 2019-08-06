/*
    if Statement
        An ‘if’ statement consists of a Boolean expression followed by one or more statements .
*/

var  num = 5 
if (num>0) { 
   console.log("number is positive") 
}

/*
if…else Statement
    An ‘if’ statement can be followed by an optional ‘else’ statement, which executes when the Boolean 
    expression is false.
*/

var num = 12; 
if (num % 2==0) { 
   console.log("Even"); 
} else { 
   console.log("Odd"); 
}

/*
	The else.. if ladder/nested if statements
    The else…if ladder is useful to test multiple conditions. Following is the syntax of the same.
*/

var num = 2 
if(num > 0) { 
   console.log(num+" is positive") 
} else if(num < 0) { 
   console.log(num+" is negative") 
} else { 
   console.log(num+" is neither positive nor negative") 
}


/*
 switch…case Statement
    The switch statement evaluates an expression, matches the expression’s value to a case clause 
    and executes the statements associated with that case.
*/

var grade = "A"; 
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   }
   case "C": { 
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
} 

