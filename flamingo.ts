import Bird from './bird';

class Flamingo extends Bird {
    speed: number;

    constructor(name: string, color: string, speed: number) {
        super(name, color);
        this.speed = speed;
    }

    correr() {
        this.speed ++;
    }
 }

 const pedrito = new Flamingo("Pedrito", "pink", 0);
 pedrito.correr();
 console.log(pedrito);