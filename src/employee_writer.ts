import { CSVWriter } from "./csv_writer";

interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
}

// employee write
const employeeWriter = new CSVWriter<Employee>([
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
