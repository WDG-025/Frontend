// function() {}
// array    []
// .method()
// objects   {}

// JS OBJECTS
const person = {
  firstName: "John",
  age: 40,
  isStudent: true,
  adress: { street: "Sesame strett", houseNo: "40c", city: "Berlin" },
  "user-id": "00342",
};

console.log(person.firstName);
console.log(person.adress.city);

const whatUserClickedOn = "age";
console.log(person[whatUserClickedOn]);

console.log(person["user-id"]);

// Werte aendern
person.age = 45;
console.log(person.age);

// const array = [1, 4, 6];
// array[1] = 7;

const make = "Toyota";
const model = "Corolla";
const year = 2025;

// const car = {
//   make: make,
//   model: model,
//   year: year,
// };

const car = {
  make,
  model,
  year,
};

console.log(car.year);

car.color = "Yellow";
console.log(car);

// Object methods
// Object.entries(car);
// Object.freeze(car);

// Unsere eigenen Methoden erstellen →Isntanzmethoden

const user = {
  firstName: "John",
  age: 40,
  isStudent: true,
  adress: { street: "Sesame strett", houseNo: "40c", city: "Berlin" },
  languages: ["english", "german", "spanish"],
  "user-id": "00342",
  sayHi() {
    console.log(`Hi my name is ${user.firstName}`);
    console.log(`Hi my name is ${this.firstName}`);
  },
};

const user2 = {
  firstName: "Mary",
  age: 40,
  isStudent: true,
  adress: { street: "Sesame strett", houseNo: "40c", city: "Berlin" },
  languages: ["english", "german", "spanish"],
  "user-id": "00342",
  sayHi() {
    console.log(`Hi my name is ${user.firstName}`);
    console.log(`Hi my name is ${this.firstName}`);
  },
  //   * => bezieht this. auf global scope (window)
  //   sayArrow: () => {
  //     console.log(`Hi my name is ${this.firstName}`);
  //   },
};

user.sayHi();
user2.sayHi();
user2.firstName = "Jane";
user2.sayHi();

// # eingebaute JS Objecte
// * Math

console.log(Math.random() * 10);
console.log(Math.round(4.3));
console.log(Math.max(1, 5, 28));
console.log(Math.min(1, 5, 28));

// * Date
const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getSeconds());

const birthDay = new Date("2000-01-01");
console.log(birthDay.getFullYear());

const date2 = Date();

console.log(date2);

// # Object Destructuring

const personD = {
  firstName: "John",
  age: 40,
  isStudent: true,
  adress: { street: "Sesame strett", houseNo: "40c", city: "Berlin" },
  languages: ["english", "german", "spanish"],
  "user-id": "00342",
  sayHi() {
    console.log(`Hi my name is ${user.firstName}`);
    console.log(`Hi my name is ${this.firstName}`);
  },
};

// const username = personD.firstName;
// const nationality = personD.nationality || "Unkown nationality";
// const age = personD.age;
// const isStudent = personD.isStudent;
// const city = personD.adress.city;

const {
  firstName: username, // Variablen-Name individuel anpassen
  nationality = "Unkown nationality", // Default / Fallback Wert
  age,
  isStudent,
  adress: { city }, // Verschachtelte Properties
} = personD;

console.log(username);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(nationality);

// nationality = "Spanish";
// console.log(nationality);

console.log(personD.nationality);
personD.nationality = "German";
console.log(personD.nationality);

// # Array Destructuring

const array = [3, 7, 9, 16];

// const first = array[0];
// const second = array[1];

const [, , , fourth] = array;

// console.log(first);
// console.log(second);
console.log(fourth); // 16

const myArray = [
  // ... 56 elements
  "item at index 56",
  "item at index 57",
  // ... mor elements
];

const { 57: item } = myArray;
console.log(item);
