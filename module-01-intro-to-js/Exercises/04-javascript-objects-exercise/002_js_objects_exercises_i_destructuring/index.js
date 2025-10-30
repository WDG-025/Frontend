// You can work here or download the template!
// Initial array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// Initial object
const person = {
  name: 'John Doe',
  address: {
    city: 'New York',
    zip: '10001',
  },
};

// # 05. Destructuring in Function Parameters
// Initial function
// function displayPerson(person) {
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }

function displayPerson({
  name: firstName = 'unkown',
  age = 'unkown',
  profession = 'Unemployed',
}) {
  console.log(`Name: ${firstName}, Age: ${age}, Profession: ${profession}`);
}

displayPerson(person);

// # 01. Simple Array Destructuring
// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
const [fruit1, fruit2] = fruits;
// console.log(fruit1);

// # 02. Skipping Elements in Array Destructuring
// const firstFruit = fruits[0];
// const thirdFruit = fruits[2];
const [firstFruit, , thirdFruit] = fruits;

// # 03. Simple Object Destructuring
// const name = person.name;
// const age = person.age;
// const { name, age } = person;
// console.log(age);

// # 04 Nested Object Destructuring
// const city = person.address.city;
const {
  address: { city: asdf = 'test' },
} = person;

console.log(asdf);
