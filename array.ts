var courses = ['angular','reactjs','.net'];

for (let index = 0; index < courses.length; index++) {
    const element = courses[index];
    
}

//another way -> array destructuring

var student = {
    firstName : 'jack',
    lastName : 'sparrow',
    score : 90
};

let{firstName,lastName,score} = student;

var arr : number[] =[20, 30, 12,30,100, 20];
 
console.log(arr.splice(2,3,88,99));//2nd and 3rd position num is removed 
//1st we have removed 2nd position element [20,30,30,100,20]
//then removed 3rd position value [20,30,30,20]
//after add 88 and 99 in that position [20,30,88,99,20] it means 2nd position pasun 3 element delete krun 88 and 99 element add hoil 

console.log(arr);

// console.log(arr.toString());

var a = [];
var b = [];
console.log(a == b);//false, because both the allocate the diffrent memory address. 

var c = ['20'];
var d = [20];
console.log(a[0] == b[0]);//true,value is equal.
console.log(a[0] == b[0]);//false , diffrent data type


//using optional parameter(?) 
// function display(id: number , name : string ,role ?: string){
//     console.log(`id: ${id}`);
//     console.log(`name: ${name}`);
// if (role != undefined ) {
//     console.log(`role: ${role}`);

// }
// }
// display(1,'jack');
// display(2,'ashu');

//using Default parmeter/values
function display(id: number , name : string ,role : string = 'guest value or default value'){
    console.log(`id: ${id}`);
    console.log(`name: ${name}`);
if (role != undefined ) {
    console.log(`role: ${role}`);

}
}
display(1,'jack');
display(2,'ashu','Admin');

//function overloading

function doubleMe(x?:number);
function doubleMe(x:string);
function doubleMe(x:string[]);

function doubleMe(x:any){
    
}
doubleMe(10);

//... rest parameter
// var product = function(res :string,...num){

// }

//arrow function
var hello = (name: string): string => {
    return 'hello' + name;
}
console.log(hello('jack'));

//----------------------------------
// how many time we can declare array in js?

