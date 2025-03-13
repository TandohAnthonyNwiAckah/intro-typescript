//------------------------
// extending type aliases
//------------------------

type Person = {
  id: string | number;
  firstName: string;
};

type AllUser = Person & { email: string };

const personOne = {
  id: 1,
  firstName: "John",
};

const personTwo = {
  id: "2",
  firstName: "Doe",
  email: "doe@tanacom.io",
};

const personThree = {
  email: "test@tanacom.io",
};

function printUser(user: AllUser) {
  console.log(user.id, user.email, user.firstName);
}

// printUser(personOne) --> not allowed
printUser(personTwo);
// printUser(personThree) --> not allowed
