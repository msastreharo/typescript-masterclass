class Bird {
    color: string;
    name: string;

    constructor(color:string, name:string) {
        this.color = color;
        this.name = name;
    }
    
    volar() {
        return "I'm flying, besties";
    }
}

const bird = new Bird("blue", "Paquito");

console.log(bird.volar())

export default Bird;