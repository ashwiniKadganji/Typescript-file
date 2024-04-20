console.log(`--------------class with constructor----------`);

class Employee {
    constructor(empName,empAddr,companyName,mobNumber) {
        empName = empName;
        empAddr = empAddr;
        companyName = companyName;
        mobNumber = mobNumber;
    }
}
const empAshu = new Employee('Ashu','Pune','TCS',1232343456);
const empRenu = new Employee('Renu','Kothrud','TCS',1278978906);
const array = [empAshu,empRenu];

for (const element of array) {
    
    console.log(empAshu);   
}
console.log(`----------class parameter properties----------`);






console.log(`-----remove duplicate items from an array-----`);
console.log(`var inputarr = [1,2,2,4,5,4,7,8,7,3,6];`);
var inputarr = [1,2,2,4,5,4,,7,8,7,3,6];
const 
