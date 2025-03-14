//-----------------
// Generic Classes
//-----------------

interface HasId {
  id: number;
}

class DataCollection<T extends HasId> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data;
  }

  add(val: T): T[] {
    this.data.push(val);
    return this.data;
  }

  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

interface User1 {
  name: string;
  score: number;
  id: number;
}

const user1 = new DataCollection<User1>([
  { name: "jane", score: 125, id: 1 },
  { name: "john", score: 100, id: 2 },
  { name: "doe", score: 150, id: 3 },
]);

user1.add({ name: "tony", score: 50, id: 4 });

user1.deleteOne(2);

console.log("load one - ", user1.loadOne());
console.log("load all - ", user1.loadAll());
