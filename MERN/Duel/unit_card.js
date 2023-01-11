const Card = require("./duels");

class unitCard extends Card{
constructor(name, cost, power, resilience){
    super(name, cost);
    this.power = power;
    this.resilience = resilience
}

hardAlgorithm(target){
    target.resilience += 3;
    console.log(`${this.name} targeted ${target.name} with a Hard Algorith`)
    console.log(`${target.resilience}`)
    return this
}

unhandledPromiseRejection(target){
    target.resilience -= 2;
    console.log(`${this.name} target ${target.name} with UPR`)
    console.log(`${target.resilience}`)
}

pairProgramming(target){
    target.power += 2;
    console.log(`${this.name} target ${target.name} with Pair Programming`)
    console.log(`${target.power}`)
}
}

const redBelt = new unitCard("Red Belt Ninja", 3, 3, 4)
const blackBelt = new unitCard("Black Belt Ninja", 4, 5, 4)

redBelt.hardAlgorithm(redBelt);
