var person = { 
    firstname:"Tom", 
    lastname:"Hanks", 
    func:function(){return "Hello!!"},    
 }; 
 //access the object values 
 console.log(person.firstname)   
 console.log(person.lastname) 
 console.log(person.func())


var foo = 'bar';;
var baz = { foo } 
console.log(baz.foo)


var myCar = new Object(); 
myCar.make = "Ford"; //define an object 
myCar.model = "Mustang"; 
myCar.year = 1987;  

console.log(myCar["make"]) //access the object property 
console.log(myCar["model"]) 
console.log(myCar["year"])

//Constructor Function 
function Car() { 
    this.make = "Ford" 
    this.model = "F123" 
 }  
 var obj = new Car() 
 console.log(obj.make) 
 console.log(obj.model)

 // The Object.create Method

 var roles = { 
    type: "Admin", // Default value of properties 
    displayType : function() {  
       // Method which will display type of role 
       console.log(this.type); 
    } 
 }  
 // Create new role type called super_role 
 var super_role = Object.create(roles); 
 super_role.displayType(); // Output:Admin  
 
 // Create new role type called Guest 
 var guest_role = Object.create(roles); 
 guest_role.type = "Guest"; 
 guest_role.displayType(); // Output:Guest

// The Object.assign() Function

var det = { name:"Tom", ID:"E1001" }; 
var copy = Object.assign({}, det); 
console.log(copy);  
for (let val in copy) { 
   console.log(copy[val]) 
}
copy.name = "A";
console.log(copy.name);
