// You can work here or download the template!
// Step 1: Initialize an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Step 2: Use the forEach method to print each number
numbers.forEach((number) => {
  console.log(number);
});

// Step 3: Use the forEach method to calculate the sum of the numbers
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log('Sum:', sum); // Prints: Sum: 15

// Step 4: Use the forEach method to create a new array with squared values
const squaredNumbers = [];
numbers.forEach((number) => {
  squaredNumbers.push(number * number);
});
console.log('Squared Numbers:', squaredNumbers); // Prints: Squared Numbers: [1, 4, 9, 16, 25]
