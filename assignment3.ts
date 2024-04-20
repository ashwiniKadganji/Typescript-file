interface ICar{
    price: number;
    getTotalSeat : number;
    color: string;
    calling: string;
    wheel: string;
    checkAC: string;
    Print(): string
}
interface IHundaiGPS{
    GPS: boolean;
}

class Toyota implements ICar{
    calling: string;
    wheel: string;
    checkAC: string;
    price: number;
    getTotalSeat: number;
    color: string;
    Print(): string {
        throw new Error("Method not implemented.");
    }

}
class Hundai implements ICar,IHundaiGPS{
    calling: string;
    wheel: string;
    checkAC: string;
    GPS: boolean;
    price: number;
    getTotalSeat: number;
    color: string;
    Print(): string {
        throw new Error("Method not implemented.");
    }

}

var objCar = new Toyota();
console.log(`------Toyota Car Details-------`);

console.log(`Toyota is: ${objCar.wheel = '4 wheeler'}`);
console.log(`Calling Facility: ${objCar.calling = 'Supported'}`);
console.log(`AC is: ${objCar.checkAC = 'Available'}`);
console.log(`Toyota car Price is: ${objCar.price = 1000000}`);
console.log(`Total seats are: ${objCar.getTotalSeat = 5}`);
console.log(`Toyota car color is: ${objCar.color = 'White'}`);



var objCar1 = new Hundai();
console.log(`------Hundyai Car Details-------`);
console.log(`Hundai is: ${objCar1.wheel = '4 wheeler'}`);
console.log(`Calling Facility: ${objCar1.calling = 'Supported'}`);
console.log(`AC is: ${objCar1.checkAC = 'Available'}`);
console.log(`Hundai car Price is: ${objCar1.price = 900000}`);
console.log(`Total seats are: ${objCar1.getTotalSeat = 7}`);
console.log(`Hundai car color is: ${objCar1.color = 'Gray'}`);
console.log(`Hundai GPS: ${objCar1.GPS = true}`);

    


    
