var fs  = require("fs");

fs.readFile("readFile.txt",function(err,data){
    if(err){
       return "File not found."
    }

    console.log(data);
});
  
console.log("Program end..!!");