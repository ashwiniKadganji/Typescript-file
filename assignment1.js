var math, physics, Chemistry, avg;
math = prompt("Enter math Marks: ");
console.log("Maths marks is : ".concat(math));
physics = prompt('Enter physics marks: ');
console.log("Physics marks is : ".concat(physics));
Chemistry = prompt("Enter Chemistry marks: ");
console.log("Chemistry marks is : ".concat(Chemistry));
var sum = Number(math) + parseInt(physics) + Number(Chemistry);
console.log("Sum of all subjects: ".concat(sum));
var avg = sum / 3;
console.log("Avarage : ".concat(avg));
if (avg >= 35 && avg <= 70) {
    console.log('C Grade');
}
else if (avg >= 70 && avg <= 90) {
    console.log('B Grade');
}
else if (avg >= 90) {
    console.log('A Grade');
}
else {
    console.log('Invalid data');
}
