var global_num = 12          //global variable 
 
class VariableScope{
    num_val     = 13;             //class variable 
    static sval = 10;         //static field 

    example():number{
      var local_num = 14;    //local variable 
      return local_num;
    }
}


console.log("Global num: "+global_num)  
console.log(VariableScope.sval)   //static variable  
var variableScopeObj = new VariableScope(); 
console.log("Global num: "+variableScopeObj.num_val) 
console.log("Global num: "+variableScopeObj.example()) 