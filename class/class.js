// 1.Object
// class : 붕어빵 틀 , object : 붕어빵 종류(피자,야채,팥...)
// 클래스의 첫 글자는 대문자로!
// 클래스를 기반으로 만든 객체 : 인스턴스(객체)
// 인스턴스를 생성할때 쓰는 문법 : new 클래스 이름()
// 생성자 : 클래스를 기반으로 인스턴스를 생성할때 처음 호출되는 메소드(인스턴스 뒤의 ()를 생성자라 한다.), 따라서 생성자에서는 속성을 추가하는 등 객체의 초기화 처리를 한다.


// class Student {                        1.클래스 선언

// }

// const student = new Student()          2. 인스턴스 생성

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
