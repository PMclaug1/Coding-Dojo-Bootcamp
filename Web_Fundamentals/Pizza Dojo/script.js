function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin crust", "white sauce", ["mozzarella", "goat cheese"], ["sun dried tomatoes, artichokes"])
console.log(pizza3)

var pizza4 = pizzaOven("deep dish", "marinara", ["mozarella","provalone"],["green peppers", "onions", "sausage", "mushrooms"])
console.log(pizza4)


var crustType = ["deep dish", "hand tossed", "thin crust", "tavern style"];
var sauceType = ["marinara", "white sauce", "traditional", "bbq"];
var cheese = ["mozzarella", "pecorino", "goat cheese", "provalone"];
var toppings = ["mushrooms", "sausage", "onions", "green peppers"];

function randomPick(arr) {
    var i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

function randomRange(max,min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheese = [];
    pizza.toppings = [];
    
    for (var i = 0; i<randomRange(4, 1); i++){
        pizza.cheese.push(randomPick(cheese));
    }

    for (var i = 0; i<randomRange(4, 1); i++){
        pizza.toppings.push(randomPick(toppings));
    }

    return pizza;

}

console.log(randomPizza());

