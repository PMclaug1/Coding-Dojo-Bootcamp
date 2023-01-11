class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.languages = ["Python", "Javascript", "Java", "C#"]
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`${this.name}, ${this.health}, ${this.speed}, ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health)
        return this
    }
}

const ninja1 = new Ninja ("Patrick", 50)

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()