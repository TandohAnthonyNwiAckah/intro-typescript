"use strict";
//-----------------
// Generic Classes
//-----------------
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const user1 = new DataCollection([
    { name: "jane", score: 125, id: 1 },
    { name: "john", score: 100, id: 2 },
    { name: "doe", score: 150, id: 3 },
]);
user1.add({ name: "tony", score: 50, id: 4 });
user1.deleteOne(2);
console.log("load one - ", user1.loadOne());
console.log("load all - ", user1.loadAll());
