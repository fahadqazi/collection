var list = [1,2,3,4,5]

function map(arr, fn){
    var len = arr.length
    var newArr = [] 
    for(let i=0; i<len; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr;
}

const timesTwo = (item) => item * 2

var result = map(list, timesTwo)
console.log('result: ', result)

