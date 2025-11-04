// Step 1: Initialize an array of numbers
const numbers = [10, 20, 30, 40, 50];

// Step 2: Use the find method to locate a number greater than 25
const numberGreaterThan25 = numbers.find((number) => number > 25);
console.log('First number greater than 25:', numberGreaterThan25); // Prints: First number greater than 25: 30

// Step 3: Initialize an array of objects
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

// Step 4: Use the find method to locate a person named "Charlie"
const personNamedCharlie = people.find((person) => person.name === 'Charlie');
console.log('Person named Charlie:', personNamedCharlie);
// Prints: Person named Charlie: { name: "Charlie", age: 35 }
