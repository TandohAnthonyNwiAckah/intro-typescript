"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_writer_1 = require("./csv_writer");
const paymentsWriter = new csv_writer_1.CSVWriter(["amount", "notes", "id", "to"]);
// add initial rows
paymentsWriter.addRows([
    { id: 1, amount: 100, notes: "payment for plumbing work", to: "jane" },
    { id: 2, amount: 40, to: "john", notes: "payment for design work" },
    { id: 3, amount: 85, to: "doe", notes: "clearing a debt" },
]);
// save the file
paymentsWriter.save("data/payments.csv");
