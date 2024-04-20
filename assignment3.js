var Toyota = /** @class */ (function () {
    function Toyota() {
    }
    Toyota.prototype.Print = function () {
        throw new Error("Method not implemented.");
    };
    return Toyota;
}());
var Hundyai = /** @class */ (function () {
    function Hundyai() {
    }
    Hundyai.prototype.Print = function () {
        throw new Error("Method not implemented.");
    };
    return Hundyai;
}());
var objCar = new Toyota();
console.log("------Toyota Car Details-------");
console.log("Toyota is: ".concat(objCar.wheel = '4 wheeler'));
console.log("Calling Facility: ".concat(objCar.calling = 'Supported'));
console.log("AC is: ".concat(objCar.checkAC = 'Available'));
console.log("Toyota car Price is: ".concat(objCar.price = 1000000));
console.log("Total seats are: ".concat(objCar.getTotalSeat = 5));
console.log("Toyota car color is: ".concat(objCar.color = 'White'));
var objCar1 = new Hundyai();
console.log("------Hundyai Car Details-------");
console.log("Hundyai is: ".concat(objCar1.wheel = '4 wheeler'));
console.log("Calling Facility: ".concat(objCar1.calling = 'Supported'));
console.log("AC is: ".concat(objCar1.checkAC = 'Available'));
console.log("Hundyai car Price is: ".concat(objCar1.price = 900000));
console.log("Total seats are: ".concat(objCar1.getTotalSeat = 7));
console.log("Hundyai car color is: ".concat(objCar1.color = 'Gray'));
console.log("Hundyai GPS: ".concat(objCar1.GPS = true));
