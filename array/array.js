// find() 메서드는 주어진 함수를 만족하는 첫 번째 요소의 값을 반환. 그런 요소가 없다면 undefined를 반환
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);
console.log(found); // expected output: 12

// =====================================================================

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result);  // expected output: Array ["exuberant", "destruction", "present"]


// =====================================================================

// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // expected output: "Fire,Air,Water"
console.log(elements.join('')); // expected output: "FireAirWater"
console.log(elements.join('-')); // expected output: "Fire-Air-Water"

// =====================================================================

// split() 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다.
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]); // expected output: "fox"

const chars = str.split('');
console.log(chars[8]); // expected output: "k"

const strCopy = str.split();
console.log(strCopy); // expected output: Array ["The quick brown fox jumps over the lazy dog."]


// =====================================================================

// SLICE (배열 그대로 반환)
let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));    // ['c','d','e']
console.log(arr.slice(2,4));    // ['c','d'] , 마지막 매개변수는 포함x
console.log(arr.slice(-2));    // ['d', 'e']
console.log(arr.slice(-1));    // ['e'] 
console.log(arr.slice(1,-2));    // ['b','c']
console.log(arr.slice());    // ['a','b','c','d','e']
console.log([...arr]);    // ['a','b','c','d','e']

// =====================================================================

// SPLICE (배열 변경되어 반환)
console.log(arr.splice(2));   // ['c','d','e']
// console.log(arr);   // ['a','b']
console.log(arr.splice(-1));   // ['a','b','c','d']
console.log(arr.splice(1,2));   // ['a','d','e']

// =====================================================================

// REVERSE (배열 변경되어 반환)
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());    // ['f','g','h','i','j']
console.log(arr2);    // ['f','g','h','i','j'] 

// =====================================================================

// CONCAT (배열 변경 x)
const letters = arr.concat(arr2);   // ['a','b','c','d','e','f','g','h','i','j'];

// =====================================================================

// JOIN
console.log(letters.join('-'));     // a - b - c - d - e - f - g - h - i - j

// =====================================================================


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

// =====================================================================

// map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1); // expected output: Array [2, 8, 18, 32]


// =====================================================================


// indexOf('값') -> 2(인덱스), 인덱스 없으면 -1나옴
// lastIndexOf('값') -> 같은값 중 배열 마지막에 있는 인덱스 값
// includes('값') -> true / false 나옴 

// =====================================================================

// some() 메서드는 배열 안의 어떤 요소라도 주어진 판별(true,false) 함수를 통과하는지 테스트한다. 빈 배열에서 호출하면 무조건 false를 반환한다.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even)); // expected output: true


// =====================================================================
