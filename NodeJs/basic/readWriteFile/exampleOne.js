var fs = require("fs");

var readFile = fs.readFileSync("readFile.txt");
fs.writeFileSync("writeFile.txt",readFile);

 console.log(readFile);
console.log("Program End..!!");

