// create object
var product = {
    id: 123,
    name: "Iphone",
    description: "it is awesome",
    price: 123000,
    Print: function () {
        throw new Error("Function not implemented.");
    }
};
//class implements Interface
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.Print = function () {
        throw new Error("Method not implemented.");
    };
    return Test;
}());
var objTest = new Test();
objTest.id = 111;
objTest.name = "OPPO";
objTest.description = "Nice and beautiful product..!!";
objTest.price = 140000;
objTest.color = 'pink';
console.log(objTest);
