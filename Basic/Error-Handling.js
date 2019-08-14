var num =10;
try{
   
    if(num >20){
      console.log('success');
    }else{
        throw 'Fails';
        console.log('Fails..!!');
    }
}catch(err){
   console.log(err);
}