interface IPerson {
    name: string;
}
interface IEmployee{
    id: number;
    salary: number;
}
interface IDev extends IPerson,IEmployee{
    course: string;
}

var newIDev: IDev = {
    course: "Angular",
    name: "Jack",
    id: 1,
    salary: 59000
}
console.log(newIDev);
