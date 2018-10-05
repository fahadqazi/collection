## What is functional programming?
It is the declarative evaluation of pure functions to create immuatable
programs by avoiding external observable side effects.

### Making a program functional


####Original Code with side effects to the DB and DOM
- This code fetch the record from the DB(1) and modifies the DOM(2), that's two
    side effects
- Also, if student is not found it'll throw an error, another side effect
```javascript
function showSudent(ssn){
    let student = dn.get(ssn)
    if(student != null){
        document.querySelector(`#${elementId}`).innerHTML = 
        `${student.ssn},
         ${student.firstName}
         ${student.lastName}`
    }
    else{
        throw new Error('Student now found')
    }
}

showStudent('444-444-444')

```

### Making it functional
1. Separate student fetch and DOM render into two separate functions.
2. We'll use 'curring' which means you can partially set some function
   arugments.
3. In the code bellow 'run' is a function we consider pre-written

```javascript
var find = curry((db, id) => {
    let obj = db.find(id)
    if(obj === null){
        throw new Error('Object now found')
    }
    return obj;
}) 

var csv = student => `${student.ssn}, ${student.firstName}, ${student.lastName}`

var append = curry((selector, info) => {
    document.querySelector(selector).innerHTML = info
})

var showStudent = run(append('#student-info'), csv, find(db))

showStudent('444-444-444')

```
4. In this 'find' function above there is still a chance that it can throw an
   exception in the if block. Pure functions should have 'referential
   transparency', which means to guarantee a consistent return value, making it
   predictable.
5. If a function gives the same output given the same output it's pure and
   referentially transparent.
