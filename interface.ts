interface IProduct{
    id:number;
    name: string;
    description: string;
    price: number;

    //abstract merhod
    Print(): string //no body //call a method
}

interface Itest{
    color: string;
}

// objects implements iterface
var product: IProduct = {
    id: 123,
    name: "Iphone",
    description: "it is awesome",
    price: 123000,
    //implementation
    Print: function (): string {
        throw new Error("Function not implemented.");
    }
}

//class implements Interface
class Test implements IProduct,Itest{
    color: string;
    Print(): string {
        throw new Error("Method not implemented.");
    }
    id: number;
    name: string;
    description: string;
    price: number;
}
var objTest = new Test();
objTest.id = 111;
objTest.name = "OPPO";
objTest.description = "Nice and beautiful product..!!";
objTest.price = 140000;
objTest.color = 'pink';
console.log(objTest);
