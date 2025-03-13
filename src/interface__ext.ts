//----------------------
// extending interfaces
//----------------------

interface hasFormatter {
  format(): string;
}

interface Bill extends hasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const member = {
  id: 1,
  format(): string {
    return `This member has an id of ${this.id}`;
  },
};

const bill = {
  id: 2,
  amount: 50,
  server: "John Doe",
  format(): string {
    return `Bill with id ${this.id} has £${this.amount} to pay`;
  },
};

function printFormatted(val: hasFormatter): void {
  console.log(val.format());
}

function printBill(bill: Bill): void {
  console.log("server:", bill.server);
  console.log(bill.format());
}

// testing the functions
printFormatted(member);
printFormatted(bill);
// printBill(member) --> not allowed
printBill(bill);
