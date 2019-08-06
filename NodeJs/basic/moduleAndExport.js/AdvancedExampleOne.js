var counter = function(){
    console.log("From Counter Function");
}


var add = function(a,b){
   console.log(`Addition a+b = ${a+b}`);
}


var pi = 3.14;
//add(10,20);

/* 1st way
module.exports.counter = counter;
module.exports.add = add;
module.exports.pi = pi;
*/


/*  2nd way
module.exports.counter = function(){
    console.log("From Counter Function");
}
*/

// 3rd way
module.exports = {
   counter : counter,
   add : add,
   pi : pi
}
