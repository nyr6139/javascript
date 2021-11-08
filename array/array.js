// SLICE (배열 그대로 반환)
let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));    // ['c','d','e']
console.log(arr.slice(2,4));    // ['c','d'] , 마지막 매개변수는 포함x
console.log(arr.slice(-2));    // ['d', 'e']
console.log(arr.slice(-1));    // ['e'] 
console.log(arr.slice(1,-2));    // ['b','c']
console.log(arr.slice());    // ['a','b','c','d','e']
console.log([...arr]);    // ['a','b','c','d','e']

// SPLICE (배열 변경되어 반환)
console.log(arr.splice(2));   // ['c','d','e']
// console.log(arr);   // ['a','b']
console.log(arr.splice(-1));   // ['a','b','c','d']
console.log(arr.splice(1,2));   // ['a','d','e']


// REVERSE (배열 변경되어 반환)
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());    // ['f','g','h','i','j']
console.log(arr2);    // ['f','g','h','i','j'] 


// CONCAT (배열 변경 x)
const letters = arr.concat(arr2);   // ['a','b','c','d','e','f','g','h','i','j'];

// JOIN
console.log(letters.join('-'));     // a - b - c - d - e - f - g - h - i - j