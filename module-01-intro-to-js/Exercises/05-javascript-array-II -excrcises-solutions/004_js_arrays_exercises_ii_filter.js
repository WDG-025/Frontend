// Step 1: Initialize an array of numbers
const numbers = [5, 10, 15, 20, 25, 30];

// Step 2: Use the filter method to create a new array with numbers greater than 15
const numbersGreaterThan15 = numbers.filter((number) => number > 15);
console.log('Numbers greater than 15:', numbersGreaterThan15);
// Prints: Numbers greater than 15: [20, 25, 30]

// Step 3: Initialize an array of objects
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 88 },
  { name: 'Eve', grade: 95 },
];

// Step 4: Use the filter method to create a new array with students who scored above 80
const studentsAbove80 = students.filter((student) => student.grade > 80);
console.log('Students who scored above 80:', studentsAbove80);
// Prints: Students who scored above 80: [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "David", grade: 88 },
//   { name: "Eve", grade: 95 }
// ]
