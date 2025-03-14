//--------------
// Generics 101
//--------------

function logAndReturnString(val: string): string {
  console.log(val);
  return val;
}

function logAndReturnNumber(val: number): number {
  console.log(val);
  return val;
}

function logAndReturnBoolean(val: boolean): boolean {
  console.log(val);
  return val;
}

// Generic Fxn
function logAndReturnValue<T>(val: T): T {
  console.log(val);
  return val;
}

const result1 = logAndReturnValue<string>("john");
const result2 = logAndReturnValue<number>(25);

// example 2

function getRandomArrayValue<T>(values: T[]): T {
  const i = Math.floor(Math.random() * values.length);

  return values[i];
}

interface User1 {
  name: string;
  score: number;
}

const users1: User1[] = [
  { name: "john", score: 100 },
  { name: "ackah", score: 150 },
  { name: "jane", score: 75 },
  { name: "doe", score: 90 },
];

const randomUser = getRandomArrayValue<User1>(users1);
console.log(randomUser.name);
