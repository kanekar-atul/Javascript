'use strict' 
var roles = new Map([ 
   ['r1', 'User'], 
   ['r2', 'Guest'], 
   ['r3', 'Admin'], 
]);
for(let r of roles.entries()) 
console.log(`${r[0]}: ${r[1]}`);


let weakMap = new WeakMap(); 
let obj = {}; 
console.log(weakMap.set(obj,"hello"));  
console.log(weakMap.has(obj));// true


let weakSet = new WeakSet();  
   let obj = {msg:"hello"}; 
   weakSet.add(obj); 
   console.log(weakSet.has(obj)); 
   weakSet.delete(obj); 
   console.log(weakSet.has(obj));


   var  set = new Set(['a','b','c','d','e']);  
var iterator = set.values(); 
console.log(iterator.next());


var  set = new Set(['a','b','c','d','e']);  
var iterator = set.keys(); 
console.log(iterator.next())


var map = new Map([[1,'one'],[2,'two'],[3,'three']]); 
var iterator = map.entries(); 
console.log(iterator.next()); 

var map = new Map([[1,'one'],[2,'two'],[3,'three']]); 
var iterator = map.values(); 
console.log(iterator.next());  

var map = new Map([[1,'one'],[2,'two'],[3,'three']]); 
var iterator = map.keys(); 
console.log(iterator.next());