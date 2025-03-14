//-----------
// functions
//-----------

function addTwoNumber(a: number, b: number): number {
  return a + b;
}

const subtractTwoNumber = (a: number, b: number): number => {
  return a - b;
};

// addTwoNumbers('2', 5)
const answer = addTwoNumber(3, 9);
console.log(answer);

const ans = subtractTwoNumber(10, 7);
console.log(ans);

function addAllNumbers(items: number[]): void {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1, 8, 3, -10]);

//-----------------------
// return type inference
//-----------------------

function formatGreeting(name: string, greeting: string) {
  return `${greeting}, ${name}`;
}

// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type

const greeting = formatGreeting("John", "Hello");
console.log(greeting);
