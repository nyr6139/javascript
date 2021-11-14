// Objects
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object 
// object = key: value

// 1. Literals and properties
const obj1 = {};              // 'object literal' syntax
const obj2 = new Object();    // 'object constructor' syntax

function print(person) {
  console.log(person.name);   
  console.log(person.age);    
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

// 2. Computed properties (계산된 프로퍼티) : 객체의 key값에 대괄호 [] 사용하는것
// 정확하게 어떤 key가 필요한지 모를때 computed properties 사용한다.
console.log(ellie.name);
console.log(ellie['name']);   // key는 string타입('~')으로 해야함

function printValue(obj, key) {
  console.log(obj.key);     // undefined(obj에 key값이 들어있지 않아서 undefined값이 나온다)
  console.log(obj[key])     // ellie
}

printValue(ellie, 'name');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person( 'ellie', 30);   // 위에서 처럼 계속 일일이 안만들고 함수를 사용해서 편하게 만듦
console.log(person4); 

// 4. Constructor Function
function Person(name, age) {    // 위의 함수
  this.name = name;
  this.age = age;
}


// 5. in operator : 해당하는 object안에 key가 있는지 없는지 확인
console.log('name' in ellie);  // true
console.log('random' in ellie);  // false


// 6. for..in vs for..of
// for (key in obj)     객체 사용
for (key in ellie) {
  console.log(key);     // name, age
}

// for (value of iterable)    배열사용
const array = [1, 2, 3, 4];
for(value of array){
  console.log(value);     // 1,2,3,4
}

// 7. cloning
