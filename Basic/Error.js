var num  = 10;

try{
    var b = 10/0;
    console.log(b);
}
catch(err){
    console.log(err);
}finally{
    console.log("Inside the finally block...!!!");
}


