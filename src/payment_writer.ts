import { CSVWriter } from "./csv_writer";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

const paymentsWriter = new CSVWriter<Payment>(["amount", "notes", "id", "to"]);

// add initial rows
paymentsWriter.addRows([
  { id: 1, amount: 100, notes: "payment for plumbing work", to: "jane" },
  { id: 2, amount: 40, to: "john", notes: "payment for design work" },
  { id: 3, amount: 85, to: "doe", notes: "clearing a debt" },
]);

// save the file
paymentsWriter.save("data/payments.csv");
