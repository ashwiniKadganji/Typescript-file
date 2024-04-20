function Add(x:number , y:number):number {
    return x + y;
}

function Sub(x: number, y:number):number {
    return x - y;
}

export function isPalindrome(str: string):boolean{
    return str === str.split('').reverse().join('');
}

export class EMP{
    name: string;

    getEmployee(){
      return 'get employee called'
    }
}

export {Add,Sub}

