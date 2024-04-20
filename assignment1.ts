var math, physics, Chemistry ,avg : number ;

math = prompt(`Enter math Marks: `);
console.log(`Maths marks is : ${math}`);
physics = prompt('Enter physics marks: ');
console.log(`Physics marks is : ${physics}`);
Chemistry = prompt(`Enter Chemistry marks: `);
console.log(`Chemistry marks is : ${Chemistry}`);

var sum : number = Number(math) + parseInt(physics) + Number(Chemistry);
console.log(`Sum of all subjects: ${sum}`);

var avg = sum/3;
console.log(`Avarage : ${avg}`);

if (avg >= 35 && avg <= 70){
    console.log('C Grade');

}else if(avg >= 70 && avg <= 90){
    console.log('B Grade');

}else if(avg >= 90){
    console.log('A Grade');
    
}else{
    console.log('Invalid data');
    
}

