class VariablesExamples{
    example():void{
        var name:string = "John"; 
        var score1:number = 50;
        var score2:number = 42.50;
        var sum = score1 + score2; 
       // var num:number = "hello"     // will result in a compilation error
        
       /*
       //Inferred Typing in TypeScript
       
        var num = 2;    // data type inferred as  number 
        console.log("value of num "+num); 
        num = "12";                   // error TS2011: Cannot convert 'string' to 'number'.
        console.log(num);
       */
        console.log("name"+name) 
        console.log("first score: "+score1) 
        console.log("second score: "+score2) 
        console.log("sum of the scores: "+sum)
    }
}

var variableEx = new VariablesExamples();
variableEx.example();