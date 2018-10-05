const R = require("ramda");
// console.log("r: ", R);
class Person {
  constructor(firstName, lastName, ssn) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._ssn = ssn;
  }

  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
  get ssn() {
    return this._ssn;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }
  set firstName(firstName) {
    this._firstName = firstName;
  }
  set ssn(ssn) {
    this._ssn = ssn;
  }
}

const person = new Person("fahad", "qazi", "111");
console.log("person: ", person);

// console.log(person._firstName);
// person._firstName = "jon";

// console.log(person._firstName);
// console.log("person: ", person);

var lastNameLens = R.lensProp("_lastName");
const newPerson = R.set(lastNameLens, "Gump", person);
console.log("new Person", newPerson);
R.view(lastNameLens, person);
console.log(R.view(lastNameLens, person));
console.log(R.view(lastNameLens, newPerson));

person._firstName = "jon";
console.log("persons: ", person);
person._lastName = "joe";
console.log("persons two: ", person);
