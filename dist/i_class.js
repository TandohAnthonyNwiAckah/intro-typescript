"use strict";
//-------------
// classes 101
//-------------
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - $${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
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
    format() {
        let formatted = this.details + "\n";
        // base
        formatted += `Pizza on a ${this.base} base `;
        // toppings
        if (this.toppings.length < 1) {
            formatted += "with no toppings.";
        }
        if (this.toppings.length > 0) {
            formatted += `with: ${this.toppings.join(", ")}`;
        }
        return formatted;
    }
}
////////
const pizza = new Pizza("tana special", 15);
pizza.selectBase("garlic");
pizza.addTopping("mushrooms");
pizza.addTopping("olives");
console.log(pizza);
/////
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
function printMenuItem(item) {
    console.log(item.details);
}
printMenuItem(pizza);
/// Get the has formatter interface
function printFormatted(val) {
    console.log(val.format());
}
printFormatted(pizza);
