var n1 = 10;
console.log(n1);
//--------------------------------------
// ${} -> string template
var movie = 'KGF';
var s1 = 'you are the crater of your destiny';
var s2 = "powerful peaople come from powerful places ".concat(movie);
var s3 = "powerful peaople come from powerful places ".concat(movie);
console.log(s1);
console.log(s2);
console.log(s3);
//----------------------------------------
var b1 = true;
var b2 = false;
var b3;
console.log("b1: ".concat(b1));
console.log('b2:', b2);
function test() {
    return b3 = false;
    console.log("inside function b3 value ".concat(b3));
}
console.log('test method called:', test());
//--------------------------------------
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection["north"] = "north";
    CardinalDirection["east"] = "east";
    CardinalDirection["south"] = "south";
    CardinalDirection["west"] = "west";
})(CardinalDirection || (CardinalDirection = {}));
var currentDirection = CardinalDirection.north;
console.log("currentDirection: ", currentDirection); //0 north
var gender;
(function (gender) {
    gender[gender["Male"] = 1] = "Male";
    gender[gender["Female"] = 2] = "Female";
})(gender || (gender = {}));
console.log("gender:".concat(gender.Male));
console.log("gender:".concat(gender.Female));
// console.log(gender[0]);
// console.log(gender[1]);
console.log(gender[1]);
console.log(gender[2]);
//----------------------------------
var a1 = {
    productID: 1,
    productName: 'Iphone15',
    productPrice: 150000
};
console.log(a1); //all obj
//homogeneous
var arr1 = ['angular', 'javascript'];
//heterogeneous
var arr2 = ['codemind', 123, true];
