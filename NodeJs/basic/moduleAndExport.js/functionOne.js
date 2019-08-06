var func = function(){
    console.log("Exporting module....")
}

//func();
var log = {
    "func" : function(){
        console.log("From Log..");
    },
    "name" : "Atul K",
    "countryList" : ["IN","UK","AUS"] 
}
module.exports = log;
//module.exports = [log,func];