var num = 100;
try{
   if(num >20){
      throw 'Greater than 20';
   }
}finally{
    console.log("Inside the finally block...!!!");
}