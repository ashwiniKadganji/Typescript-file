abstract class Cars{
 
    Wheel(){  
        return '4 wheeler';
    }

    CheckAC(){
        return 'AC is available';
    }

    CallFacility(){
        return 'call facility is supported';
    }

   abstract Price(): number; // declaration 
   abstract Color(): string; // declaration 
   abstract TotalSeats(): number; // declaration    
}

class Hundai extends Cars{
    Price(): number {
          return 1000000; // implementation
    }
    Color(): string {
        return 'Pink';
    }
    TotalSeats(): number {
         return 5;
    }

}

class Toyota extends Cars{
    Price(): number {
        return 50000000;
    }
    Color(): string {
        return 'black';
    }
    TotalSeats(): number {
        return 7;
    }
}

var objHoindai = new Hundai();

console.log(objHoindai.Color());
console.log(objHoindai.Price());
console.log(objHoindai.TotalSeats());

var onjToyota = new Toyota();

console.log(onjToyota.Color());
console.log(onjToyota.Price());
console.log(onjToyota.TotalSeats());


