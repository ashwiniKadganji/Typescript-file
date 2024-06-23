function addnum(num1:number, num2?: number){
    if (typeof (num2) !== 'undefined') {
        return num1 + num2 ;
    }
}
console.log(addnum(2));



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
