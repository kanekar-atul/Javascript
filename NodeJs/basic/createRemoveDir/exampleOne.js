var fs  = require("fs");

//fs.mkdirSync("./createRemoveDir/temp");
//fs.unlinkSync("./createRemoveDir/test.txt");
try{
    fs.unlink("./createRemoveDir/temp/test.txt",function(){
        fs.rmdirSync("./createRemoveDir/temp");
    });
}catch(err){
   console.log(err);
}


