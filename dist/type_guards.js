"use strict";
//-------------
// type guards
//-------------
function swapIdTypes(id) {
    if (typeof id === 'string') {
        // can use string methods and properties
        return parseInt(id);
    }
    //
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdTypes(1);
const idTwo = swapIdTypes('2');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'users') {
        console.log(value.email, value.username);
    }
    if (value.type === 'persons') {
        console.log(value.firstname, value.age);
    }
}
