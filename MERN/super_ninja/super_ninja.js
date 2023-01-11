class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`${this.name}`)
        return this
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
        return this
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} Drank Sake. Health: ${this.health}`)
        return this
    }
}

const ninja1 = new Ninja ("Patrick", 50)

// ninja1.sayName().showStats().drinkSake();

module.exports = Ninja;