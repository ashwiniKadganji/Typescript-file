function doubleMe(x) {
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + '' + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (n) { return console.log(n); });
    }
}
doubleMe(2); //4
// doubleMe('jack'); //jack jack
// doubleMe(['a']);
