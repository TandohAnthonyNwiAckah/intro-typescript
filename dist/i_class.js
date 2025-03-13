"use strict";
//-------------
// classes 101
//-------------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza("tana special", 15);
pizza.selectBase("garlic");
pizza.addTopping("mushrooms");
pizza.addTopping("olives");
console.log(pizza);
// explicit
const pizzaOne = new Pizza("doe special", 15);
// inferred
const pizzaTwo = new Pizza("john special", 10);
function addMushroomsToPizza(pizzas) {
    for (const p of pizzas) {
        p.addTopping("mushrooms");
    }
}
addMushroomsToPizza([pizzaOne, pizzaTwo]);
console.log(pizzaOne, pizzaTwo);
