class Persona {
    name: string;
    age: number;
    volumenDeAire: number;

    constructor(name: string, age:number, volumenDeAire: number) {
        this.name = name;
        this.age = age;
        this.volumenDeAire = volumenDeAire;
    }

    respirar() {
        this.volumenDeAire ++;
    }
}


const personaQueRespira = new Persona('Allan', 45, 0);

personaQueRespira.respirar();
console.log(personaQueRespira.volumenDeAire);