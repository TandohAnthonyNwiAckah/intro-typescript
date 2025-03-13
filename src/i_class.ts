//-------------
// classes 101
//-------------

type Base = "classic" | "thick" | "thin" | "garlic";

interface hasFormatter {
  format(): string;
}

abstract class MenuItem implements hasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }

  // format() {
  //   return `This menu item is called ${this.title} and is £${this.price}`;
  // }

  abstract format(): string;
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

  format(): string {
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

/// Get the has formatter interface
function printFormatted(val: hasFormatter): void {
  console.log(val.format());
}

printFormatted(pizza);
