"use strict";
//--------------
// Generics 101
//--------------
function logAndReturnString(val) {
    console.log(val);
    return val;
}
function logAndReturnNumber(val) {
    console.log(val);
    return val;
}
function logAndReturnBoolean(val) {
    console.log(val);
    return val;
}
// Generic Fxn
function logAndReturnValue(val) {
    console.log(val);
    return val;
}
const result1 = logAndReturnValue("john");
const result2 = logAndReturnValue(25);
// example 2
function getRandomArrayValue(values) {
    const i = Math.floor(Math.random() * values.length);
    return values[i];
}
const users1 = [
    { name: "john", score: 100 },
    { name: "ackah", score: 150 },
    { name: "jane", score: 75 },
    { name: "doe", score: 90 },
];
const randomUser = getRandomArrayValue(users1);
console.log(randomUser.name);
