var FunctionExample = /** @class */ (function () {
    function FunctionExample() {
    }
    FunctionExample.prototype.examples = function () {
        console.log("Hello World!!!");
    };
    FunctionExample.prototype.disp_details = function (id, name, mail_id) {
        console.log("ID:", id);
        console.log("Name", name);
        if (mail_id != undefined)
            console.log("Email Id", mail_id);
    };
    FunctionExample.prototype.addNumbers = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var i;
        var sum = 0;
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        console.log("sum of the numbers", sum);
    };
    FunctionExample.prototype.calculate_discount = function (price, rate) {
        if (rate === void 0) { rate = 0.50; }
        var discount = price * rate;
        console.log("Discount Amount: ", discount);
    };
    return FunctionExample;
}());
var functionExampleObj = new FunctionExample();
functionExampleObj.examples();
functionExampleObj.disp_details(123, "John");
functionExampleObj.disp_details(111, "mary", "mary@xyz.com");
functionExampleObj.addNumbers(1, 2, 3);
functionExampleObj.addNumbers(10, 10, 10, 10, 10);
functionExampleObj.calculate_discount(1000);
functionExampleObj.calculate_discount(1000, 0.30);
