var OperatorsExamples = /** @class */ (function () {
    function OperatorsExamples() {
    }
    OperatorsExamples.prototype.example = function () {
        var num = -2;
        var result = num > 0 ? "positive" : "non-positive";
        console.log(result);
    };
    return OperatorsExamples;
}());
var operatorsExamplesObj = new OperatorsExamples();
operatorsExamplesObj.example();
