const Card = require("./duels");
// const effectCard = require("./effect_card")

class unitCard extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience
    }
    attack(target){
        target.resilience -= this.power;
        console.log(`${this.name} attacks ${target.name}`)
        console.log(`${target.name} has ${target.resilience} resilience`)
        return this
    }
}

class effectCard extends Card{
    constructor(name, cost, text, stat, magnitute){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitute = magnitute;
    }
    hardAlgorithm(target){
        target.resilience += 3;
        console.log(`${this.name} targets ${target.name}`)
        console.log(`${target.name} has ${target.resilience} resilience`)
        return this
    }
    
    unhandledPromiseRejection(target){
        target.resilience -= 2;
        console.log(`${this.name} targets ${target.name}`)
        console.log(`${target.name} has ${target.resilience} resilience`)
        return this
    }
    
    pairProgramming(target){
        target.power += 2;
        console.log(`${this.name} targets ${target.name}`)
        console.log(`${target.name} has ${target.power} power`)
        return this
    }
}

const redBelt = new unitCard("Red Belt Ninja", 3, 3, 4)
const blackBelt = new unitCard("Black Belt Ninja", 4, 5, 4)
const hard_algorithm = new effectCard("Hard Algorithm", 2, "increate target's resilience by 3", "resilience", 3)
const unhandled_promise_rejection = new effectCard("UPR", 1, "reduce target's resilience by 2", "resilience", -2)
const pair_programming = new effectCard("Pair Programming", 3, "increase target's power by 2", "power", 2)

hard_algorithm.hardAlgorithm(redBelt)
unhandled_promise_rejection.unhandledPromiseRejection(redBelt)
pair_programming.pairProgramming(redBelt)
redBelt.attack(blackBelt)
