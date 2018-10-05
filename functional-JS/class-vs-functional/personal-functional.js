function createPerson(personId) {
  return {
    personId
  };
}

function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function addDetails(person, firstName, lastName, ssn) {
  if (firstName == undefined) {
    firstName = person.firstName;
  }
  if (lastName == undefined) {
    lastName = person.lastName;
  }
  if (ssn == undefined) {
    ssn = person.ssn;
  }
  var newPerson = Object.assign(person, {
    firstName: firstName,
    lastName: lastName,
    ssn: ssn
  });
  return newPerson;
}

var one = createPerson(1);
var two = addDetails(one, "fahad", "qazi", "111");
var three = addDetails(two, (lastName = "joe"));
console.log("three: ", three);

function personCollection(collectionId) {
  return {
    personCollection: {}
  };
}

function addToPersonCollection(person) {}
