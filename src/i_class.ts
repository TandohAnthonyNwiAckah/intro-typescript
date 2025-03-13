//-------------
// classes 101
//-------------

type Base = "classic" | "thick" | "thin" | "garlic";

class MenuItem {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

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

function printMenuItem(item: MenuItem): void {
  console.log(item.details);
}

printMenuItem(pizza);
