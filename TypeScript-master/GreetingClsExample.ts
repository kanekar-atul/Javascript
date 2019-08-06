class Greeting { 
    Greeting():void{
        console.log("Constructor!!!")  
    }
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();