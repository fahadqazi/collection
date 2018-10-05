### Compafing OOP to FP

```javascript

class Person{
  constructor(firstName, lastName, ssn){
    this._firstName = firstName;
    this._lastName = lastName;
    this._ssn = ssn;
    this._address = null;
    this._birthYear = null
  }
  
  get ssn(){
    return this._ssn
  }
  get firstName(){
    return this._firstName
  }
  get lastName(){
    return this._.lastName
  }
  
  get address(){
    return this._address
  }
  get birthYear(){
    reutrn this._birthYear
  }
  
  set address(address){
    this._address = address
  }
  set birthyear(year){
    this._birthYear = year
  } 
  
  toString(){
    return `Person(${this._firstName}, ${this._lastName}))`
  }
  
}

class Student extends Person{
  constructor(firstName, lastName, ssn, school){
    super(firstName, lastName, ssn);
    this._school = school
  }
  
  get school(){
    return this._school
  }
}

```
- This is a fairly typical OOP program. Person is a base class with getter/setter methods
and Student inherits from Person.
- If we need to find all the people in the same counter for Person class and all the students i
the same country that's where things get slightly complicated. We end up using 'this' and also 
mixing 'this' with 'super' keyword.
- Super when called on a 'Student' object runs the parent class 'Person' 

```javascript
// Method added to Person Class
peopleInSameCountry(friends){
  var result = []
  for(let idx in friends){
    var friend = friends[idx]
    if(this.address.country === friend.address.country){
      result.push(friend)
    }
  }
  return result
}


//Methods added to Student class
studentsInSameCountryAndSchool(friends){
 var closeFriends = super.peopleInSameCoutnry(friends);
 var result = []
 for (let idx in closeFriends){
   var friend = closeFriends[idx]
   if(friend.school === this.school){
     result.push(friend)
   }
   return result
 }
}
```

- Use the following dataset & call function
```javascript
var curry = new Student('Haskell', 'Curry', '1111', 'Penn State')
curry._adddress = 'US'

var turing = new Student('Alan', 'Turing', '222', 'Princeton')
turing._adddress = 'UK'

var church = new Student('Alonzo', 'Church', '333', 'Princeton')
church._adddress = 'US'

var kleene = new Student('Stephen', 'Kleene', '444', 'Princeton')
kleene._address = 'US'


church.studentsInSameCountryAndSchool([curry, church, kleene]) // [kleene]

```














