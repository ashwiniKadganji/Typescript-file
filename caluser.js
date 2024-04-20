"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var calc_2 = require("./calc");
console.log((0, calc_1.Add)(2, 3));
console.log((0, calc_1.Sub)(23, 15));
console.log((0, calc_2.isPalindrome)('madam')); //true
console.log((0, calc_2.isPalindrome)('madan')); //false
var emp = new calc_1.EMP();
console.log(emp.getEmployee());
