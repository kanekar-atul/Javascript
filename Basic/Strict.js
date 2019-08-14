'use strict';

//x = 200;
//console.log(x);

/* 
myFunc();
function myFunc(){
    console.log(y);
}
*/

//var x = 900;
//delete x;


var obj = {
    'name':'atul k',
    'country' : 'IN'
}

delete obj.name;
console.log(obj);


var newObj = {};
Object.defineProperty(newObj,"age",{value:30,writable:true})
console.log(newObj);
