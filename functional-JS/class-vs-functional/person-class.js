class Person {
  constructor(firstName, lastName, ssn, address) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._ssn = ssn;
    this._address = address;
    this._birthYear = null;
  }

  get ssn() {
    return this._ssn;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._.lastName;
  }

  get address() {
    return this._address;
  }
  get birthYear() {
    return this._birthYear;
  }

  set address(address) {
    this._address = address;
  }
  set birthyear(year) {
    this._birthYear = year;
  }

  toString() {
    return `Person(${this._firstName}, ${this._lastName}))`;
  }
  peopleInSameCountry(friends) {
    var result = [];
    for (let idx in friends) {
      var friend = friends[idx];
      if (this._address === friend._address) {
        result.push(friend);
      }
    }
    return result;
  }
}

class Student extends Person {
  constructor(firstName, lastName, ssn, school, address) {
    super(firstName, lastName, ssn, address);
    this._school = school;
  }

  get school() {
    return this._school;
  }
  studentsInSameCountryAndSchool(friends) {
    var closeFriends = super.peopleInSameCountry(friends);
    var result = [];
    for (let idx in closeFriends) {
      var friend = closeFriends[idx];
      if (friend._school === this._school) {
        result.push(friend);
      }
    }

    return result;
  }
}

var curry = new Student("Haskell", "Curry", "1111", "Penn State", "US");

var turing = new Student("Alan", "Turing", "222", "Princeton", "UK");

var church = new Student("Alonzo", "Church", "333", "Princeton", "US");

var kleene = new Student("Stephen", "Kleene", "444", "Princeton", "US");

var result = church.studentsInSameCountryAndSchool([curry, turing, kleene]);
console.log("result: ", result);
result.toString();
