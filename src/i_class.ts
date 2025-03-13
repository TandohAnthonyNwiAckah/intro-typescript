//-------------
// classes 101
//-------------

type Base = "classic" | "thick" | "thin" | "garlic";

class Pizza {
  constructor(private title: string, private price: number) {}

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }
}

const pizza = new Pizza("tana special", 15);

pizza.selectBase("garlic");
pizza.addTopping("mushrooms");
pizza.addTopping("olives");

console.log(pizza);

// explicit
const pizzaOne: Pizza = new Pizza("doe special", 15);

// inferred
const pizzaTwo = new Pizza("john special", 10);

function addMushroomsToPizza(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
}

addMushroomsToPizza([pizzaOne, pizzaTwo]);

console.log(pizzaOne, pizzaTwo);
