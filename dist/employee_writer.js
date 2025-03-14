"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const csv_writer_1 = require("./csv_writer");
// employee write
const employeeWriter = new csv_writer_1.CSVWriter([
    "id",
    "name",
    "salary",
    "role",
]);
employeeWriter.addRows([
    { id: 1, name: "jane", salary: 50000, role: "web developer" },
    { id: 2, name: "john", salary: 50000, role: "digital manager" },
    { id: 3, name: "doe", salary: 100000, role: "director" },
]);
employeeWriter.save("data/employees.csv");
