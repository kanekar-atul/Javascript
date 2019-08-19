console.log("Type-1");
var person = "John Doe";
console.log(person);
console.log("\n");

console.log("Type-2");
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person)
console.log("\n");

console.log("Type-3");
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);
console.log("\n");


var x = person;

console.log(x);
person.age=90;
console.log(x);


console.log("Access Properties \n");

console.log(person.age);
console.log(person['age']+"\n");

for(let x in person){
   console.log(x);
   console.log(person[x]+"\n");
}


console.log("Deleteing properties");
person.nationality = "Indian";
console.log(person);
console.log(x);

delete person.nationality;
console.log("After Deleting...");
console.log(person);
console.log(x);
