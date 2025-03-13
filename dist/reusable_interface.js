"use strict";
//--------------------
// reusable interfaces
//--------------------
// not allowed
// const something: hasQuantity = { title: 'hello', quantity: 50 }
// allowed
// const something: hasQuantity = { quantity: 50 }
function printQuantity(item) {
    // can only access known properties - quantity
    console.log(`the quantity of this item is ${item.quantity}`);
}
const fruit = {
    name: "mango",
    quantity: 50,
};
const vehicle = {
    type: "car",
    quantity: 3,
};
const perso = {
    name: "john",
    age: 30,
};
printQuantity(fruit);
printQuantity(vehicle);
// printQuantity(person) --> not allowed
// passing object literals directly has to
// include only known interface properties
// printQuantity({ quantity: 50, title: 'something' })
