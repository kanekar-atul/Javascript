// Create an Object:
var person = {
    firstName: "John",
    lastName : "Doe"
  };
  
  // Change a Property:
  Object.defineProperty(person, "language", {
    value: "EN",
    writable : true,
    enumerable : true,
    configurable : true
  });

  console.log(person);


  // Change a Property:
Object.defineProperty(person, "language", {
    get : function() { return language },
    set : function(value) { language = value.toUpperCase()}
  });


  console.log(person);


  var p = {
      name : "Atul",
      get : function(){
          return this.name
      },
      set : function(n){
          this.name = n;
      }
  }

  console.log(p.name);
    p.set("Amit");
  console.log(p.get());

  console.log(Object.getOwnPropertyNames(p));
  console.log(Object.keys(p));
/*
  Object.preventExtensions(p);
  p.country = "US";
  console.log(p);
*/

  Object.freeze(p);
  p.name = "Rahul";
  console.log(p);



