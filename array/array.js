// SLICE
let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));    // ['c','d','e']
console.log(arr.slice(2,4));    // ['c','d'] , 마지막 매개변수는 포함x
console.log(arr.slice(-2));    // ['d', 'e']
console.log(arr.slice(-1));    // ['e'] 
console.log(arr.slice(1,-2));    // ['b','c']
console.log(arr.slice());    // ['a','b','c','d','e']
console.log([...arr]);    // ['a','b','c','d','e']

// SPLICE
console.log(arr.splice(2));   // ['c','d','e']