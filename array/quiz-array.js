// Q1. make a string out of an array
// join - 배열에 있는 모든 요소를 구분자로 만들어서 string으로 리턴
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();   // apple,banana,orange
}

// Q2. make an array out of a string
// split - 구분자를 전달하지 않으면 배열 전체가 하나로 나옴
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',')  // ["🍎", "🥝", "🍌", "🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2,5)
}
 
// =======================================================================

class Student { 
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find - true값이 나오는 첫 번째 요소의 값을 return, 값이 없으면 undefined르 반환
{
  const result = students.find((student) => student.score === 90)
};

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score)
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);  // true
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  // .filter((score) => score >= 50)
  .join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
}