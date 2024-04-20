var Employee = /** @class */ (function () {
    function Employee(empName, empAddr, companyName, mobNumber) {
        empName = empName;
        empAddr = empAddr;
        companyName = companyName;
        mobNumber = mobNumber;
    }
    return Employee;
}());
var empAshu = new Employee('Ashu', 'Pune', 'TCS', 1232343456);
var empRenu = new Employee('Renu', 'Kothrud', 'TCS', 1278978906);
var array = [empAshu, empRenu];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var element = array_1[_i];
    console.log(empAshu);
}
// console.log(`-----remove duplicate items from an array-----`);
// console.log(`var inputarr = [1,2,2,4,5,4,7,8,7,3,6];`);
// var array = (...inputarr);
