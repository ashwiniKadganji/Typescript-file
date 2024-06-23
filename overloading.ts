// functionoverloading or method overloading is a mechanisms or ability to create multiple methods with same name but different paraeters types. 


function doubleMe(x: string);
function doubleMe(x: number);
function doubleMe(x: string[]);

function doubleMe(x: any){

    if(x && typeof x === 'number'){
        console.log(x*2);
    }else if (x && typeof x === 'string') {
        console.log(x + '' + x);
    }else if (Array.isArray(x)) {
        return x.map(n => console.log(n));
    }


}
doubleMe(2) //4
doubleMe('jack'); //jack jack
doubleMe(['a']);





// //function overloading

// function doubleMe(x?:number);
// function doubleMe(x:string);
// function doubleMe(x:string[]);

// function doubleMe(x:any){
    
// }
// doubleMe(10);

// //... rest parameter
// // var product = function(res :string,...num){

// // }

// //arrow function
// var hello = (name: string): string => {
//     return 'hello' + name;
// }
// console.log(hello('jack'));

//----------------------------------
// how many time we can declare array in js?

