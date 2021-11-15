// 1.Object
// class : 붕어빵 틀 , object : 붕어빵 종류(피자,야채,팥...)
// 클래스의 첫 글자는 대문자로!
// 클래스를 기반으로 만든 객체 : 인스턴스(객체)
// 인스턴스를 생성할때 쓰는 문법 : new 클래스 이름()
// 생성자 : 클래스를 기반으로 인스턴스를 생성할때 처음 호출되는 메소드(인스턴스 뒤의 ()를 생성자라 한다.), 효율성 + 정형화된 형태의 객체로 생성자는 객체들을 생성해내는 함수로 대문자로 시작, 생성된 개별된 객체 하나하나를 인스턴스라 한다. 인스턴스를 만드려고 생성자를 만든다고 생각하면 되고 인스턴스에는 new를 붙여줘야한다.


/*
- es5에서는 클래스 없이도 생성자 함수와 프로토타입을 통해 객체지향 언어의 상속을 구현할 수 있다. 하지만 es6에서 도입된 클래스는 새로운 객체 생성을 제시한다. 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 정확히 동일하게 동작하지는 않는다. 클래스는 생성자 함수와 매우 유사하게 동작하지만 몇 가지 차이가 있다.
	* 차이점
	- 1. 클래스는 new 연산자 없이 호출하면 에러가 남, 하지만 생성자 함수는 new연산자 없이 호출하면 일반함수로 호출됨
	- 2. 클래스는 상속을 지원하는 extends와 super를 제공함, 생성자 함수는 x
	- 3. 클래스는 암묵적으로 strict mode가 지정되어 실행되며 해제할 수 없다. 하지만 생성자 함수는 암묵적으로 strict mode가 지정되지 않는다.
  - 4. constructor는 class 내부에 하나만 존재할 수 있다.
*/


/*
- 클래스 선언(클래스 몸체에서 정의할 수 있는 메서드는 생성자, 프로토타입 메서드, 정적 메서드 3가지가 있음)
- 정적 메서드는 클래스로 호출하고 프로토타입 메서드는 인스턴스로 호출한다. 그러므로 정적 메서드와 프로토타입 메서드는 this 바인딩이 다르다. 메서드 내부에서 인스턴스 프로퍼티를 참조할 필요가 있다면 this를 사용해야 한며 이러한 경우 프로토타입 메서드로 정의해야 한다.
->  class Person {
    constructor(name){   // 생성자
        this.name = name;	  // 인스턴스 프로퍼티 생성 및 초기화 , this.변수명 = 매개변수1
    }
    sayHi(){   // 프로토타입 메서드
  console.log(`My name is ${this.name}`);
    }
    static sayHello() {       // 정적 메서드
  console.log('Hello'); 
    }
  }

  const person1= new Person('Lee')     ->    2. 인스턴스 생성
*/

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {   // 생성자를 만들어서 나중에 obj를 만들때 필요한 데이터 전달
    // fields                // 전달받은 데이터를 name과 age에 할당
    this.name = name; 
    this.age = age;
  }

// methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);  // 새로운 obj 생성
ellie.speak();  // ellie: hello!

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {     // get은 값을 리턴해서 수정
    return this._age
  }

  set age(value) {     // set은 값을 설정하기떄문에 value를 받아와야함
    this._age = value
  }
}


// 3. Inheritance (상속)
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color =color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return width * this.height;
  }  
}

class Rectangle extends Shape {}  // Rectangle이란 클래스를 shape으로 상속받음
class Triangle extends Shape{   
  draw() {
    super.draw();        // drawing red color! -> 부모의 draw도 나오고 싶으면 super를 써줌
    console.log('△');   // △  -> 부모는 안나오고 재정의된값만 출력
  }
  getArea() {   // 삼각형은 2로 나눠야해서 따로 다양성을 사용함
    return (this.width * this.height) / 2;
  }
} 

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();   // drawing blue color!
console.log(rectangle.getArea());  // 400

const triangle = new Triangle(20, 20, 'red');
console.log(triangle.getArea());  // 200



// (obj명 instanceOf class명) 
// 왼쪽에있는 obj가 오른쪽에있는 class를 이용해서 만들어진것인지 확인하는 것, true or false 반환
console.log(rectangle instanceof Rectangle);      // true
console.log(triangle instanceof Rectangle);       // false
console.log(triangle instanceof Triangle);        // true
console.log(triangle instanceof Shape);           // true
console.log(triangle instanceof Object);          // true


/*
===========================================================================================
1. 생성자 생략
class Person {
  constructor() {}
}
- 빈 객체 생성됨
const me = new Person();
console.log(me);  // Person {}


2. 프로퍼티가 추가되어 초기화된 인스턴스 생성
class Person{
  constructor() {
   // 고정값으로 인스턴스 초기화
   this.name = 'Lee';
   this.address = 'Seoul';
  }
}
// 인스턴스 프로퍼티가 추가된다.
const me = new Person();
console.log(me);  // Person{name: "Lee", address: "Seoul"};


3. 클래스 외부에서 프로퍼티의 초기값 전달
class Person{
  constructor(name,address) {
   // 고정값으로 인스턴스 초기화
   this.name = name;
   this.address = address;
  }
}
const me = new Person('Lee', 'Seoul');
console.log(me);  // Person{name: "Lee", address: "Seoul"};
*/