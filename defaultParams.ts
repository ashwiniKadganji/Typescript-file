function DefaultParams(id: number,name: string, role: string = 'guest user'){
    console.log('id',id);
    console.log('name',name);
    console.log('role',role);
}
DefaultParams(1,'ashu');
DefaultParams(2,'Renu','Software Developer')




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
