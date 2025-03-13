"use strict";
//----------------------
// extending interfaces
//----------------------
const member = {
    id: 1,
    format() {
        return `This member has an id of ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: "John Doe",
    format() {
        return `Bill with id ${this.id} has £${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log("server:", bill.server);
    console.log(bill.format());
}
// testing the functions
printFormatted(member);
printFormatted(bill);
// printBill(member) --> not allowed
printBill(bill);
