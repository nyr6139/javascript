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


// FOREACH(전체 배열 반복) (요소값, 인덱스, arr)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}

console.log('--------FOREACH--------');
movements.forEach(function(movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}) 
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

movements.forEach(function(mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${mov}`);
  }
});
// Movement 1: You deposited 200
// Movement 2: You deposited 450
// Movement 3: You deposited 400