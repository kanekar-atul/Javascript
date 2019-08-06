var global_num = 12; //global variable 
var VariableScope = /** @class */ (function () {
    function VariableScope() {
        this.num_val = 13; //class variable 
    }
    VariableScope.prototype.example = function () {
        var local_num = 14; //local variable 
        return local_num;
    };
    VariableScope.sval = 10; //static field 
    return VariableScope;
}());
console.log("Global num: " + global_num);
console.log(VariableScope.sval); //static variable  
var variableScopeObj = new VariableScope();
console.log("Global num: " + variableScopeObj.num_val);
console.log("Global num: " + variableScopeObj.example());
