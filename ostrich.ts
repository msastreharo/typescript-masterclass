import Bird from './bird';

class Ostrich extends Bird {
    weight: number;

    constructor(name:string, color:string, weight:number) {
        super(name, color);
        this.weight = weight;
    }

    volar() {
        return "I can't fly even though I try";
    }
}

const myOstrich = new Ostrich("grey", "Timmy", 99);
console.log(myOstrich);

const anotherOstrich = new Ostrich("pink", "Philly", 100);
console.log(anotherOstrich.volar())