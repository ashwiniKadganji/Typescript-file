var n1 : number = 10;
console.log(n1);
//--------------------------------------

// ${} -> string template
var movie = 'KGF';
var s1: string = 'you are the crater of your destiny';
var s2: string = `powerful peaople come from powerful places ${movie}`
var s3: string = `powerful peaople come from powerful places `.concat(movie);

console.log(s1);
console.log(s2);
console.log(s3);
//----------------------------------------

var b1 : boolean  = true;
var b2 : boolean = false;
var b3 : boolean;

console.log(`b1: ${b1}`);
console.log('b2:',b2);

function test(){
    return b3 = false;
    console.log(`inside function b3 value ${b3}`);
}
console.log('test method called:',test());

//--------------------------------------

enum CardinalDirection{
    north = 'north',
    east = 'east',
    south = 'south',
    west ='west'
}

let currentDirection = CardinalDirection.north;

console.log(`currentDirection: `,currentDirection);//0 north


enum gender{
    Male = 1,
    Female = 2
}
console.log(`gender:${gender.Male}`);
console.log(`gender:${gender.Female}`);

// console.log(gender[0]);
// console.log(gender[1]);

console.log(gender[1]);
console.log(gender[2]);
//----------------------------------

var a1 = {
    productID: 1,
    productName : 'Iphone15',
    productPrice: 150000
}
console.log(a1);//all obj

//homogeneous
var arr1: Array<string> = ['angular','javascript'];

//heterogeneous
var arr2: any[] = ['codemind',123,true];





