const Card = require("./duels");

class effectCard extends Card{
    constructor(name, cost, text, stat, magnitute){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitute = magnitute;
    }
}

const hard_algorithm = new effectCard("Hard Algorithm", 2, "increate target's resilience by 3", "resilience", 3)
const unhandled_promise_rejection = new effectCard("UPR", 1, "reduce target's resilience by 2", "resilience", -2)
const pair_programming = new effectCard("Pair Programming", 3, "increase target's power by 2", "power", 2)

module.exports = effectCard;