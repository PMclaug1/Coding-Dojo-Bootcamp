const Ninja = require("./super_ninja")

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom){
        super(name, health, speed, strength, wisdom);
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log(`Wise Saying`)
    }
}

const sensei1 = new Sensei("Mister T")

sensei1.speakWisdom();
sensei1.showStats();