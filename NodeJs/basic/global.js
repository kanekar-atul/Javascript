console.log("Welcome In NodeJs - Global Variables");
var time = 0;
console.log(__dirname);
console.log(__filename);
var timer =  setInterval(function(){
    time +=2;
    console.log(time +" Nice Job..!!");
    if(time > 10){
     clearInterval(timer);
    }
 },1000);

