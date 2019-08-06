var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.Greeting = function () {
        console.log("Constructor!!!");
    };
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
