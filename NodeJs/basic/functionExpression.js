// Basic
function sayHi(){
    console.log("Hello..");
}

sayHi();

//

var sayhi = function(){
    console.log("Hello...");
}

sayhi();


function callFucntion(func){
    func();
}

callFucntion(sayhi);