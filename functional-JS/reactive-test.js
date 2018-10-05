const event = require('events')
var events = new event.EventEmitter()

let a;
function setValueOfA(val){
  a = val

  events.emit('aChanged', a)
}

let b;
function computerValueofB(a){
 b = a + 100
}

events.on('aChanged', computerValueofB)

setValueOfA(50)

console.log('b: ', b)

setValueOfA(100)

console.log('b: ', b)
