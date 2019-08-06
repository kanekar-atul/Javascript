var events = require("events");

var myEmitter = new events.EventEmitter();

myEmitter.on("db connection",function(){
    console.log("Db Connection is done..");
});

myEmitter.on("getDetails For ID",function(id){
    console.log("Get Details For Id "+id);
});

myEmitter.emit("db connection");
myEmitter.emit("getDetails For ID",1001);