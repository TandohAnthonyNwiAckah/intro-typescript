"use strict";
//-------------------
// Generic Interface
//-------------------
const collectionOne = {
    data: ["john", "jane", "doe"],
    name: "john characters",
};
const collectionTwo = {
    data: [10, 15, 27, 3, 9, 34],
    name: "winning lottery numbers",
};
function randomCollectionItem(c) {
    const i = Math.floor(Math.random() * c.data.length);
    return c.data[i];
}
const result11 = randomCollectionItem(collectionOne);
const result12 = randomCollectionItem(collectionTwo);
console.log(result11, result12);
