// You can work here or download the template!

// * Initiales Array
const fruits = ["apple", "banana", "cherry", "date"];

// # Array Destructuring (Grundform)
const [first, second] = fruits;
console.log(first, second); // apple banana

// # Überspringen von Elementen beim Destructuring
const [firstfruit, , thirdfruit] = fruits;
// const { 0: firstfruit, 2: thirdfruit } = fruits; // alternative Syntax
console.log(firstfruit, thirdfruit); // apple cherry

// * Objekt-Beispiel
const person = {
  names: "John Doe",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  isActive: true,

  // # Methode im Objekt: toggle boolean
  toggleActiveStatus() {
    this.isActive = !this.isActive;
  },
};

// * Neues Objekt auf Basis von person (Spread Operator)
const alice = {
  ...person,
  names: "Alice", // überschreibt den Namen
};

console.log(alice);
alice.toggleActiveStatus(); // ändert isActive auf false

// # Einfaches Object Destructuring
// const names = person.names;
// const age = person.age;
const { names, age } = person;
console.log(names, age);

// # Verschachteltes Object Destructuring
// person.profession = "Web Dev";
const {
  address: { city, zip: postalCode },
  profession = "Don't know", // Default-Wert
} = person;

console.log(city, postalCode, profession);

// * Destructuring in Funktionsparametern
// ? Variante 1: herkömmlich
// function displayPerson(person) {
//   const { names, age } = person;
//   console.log(`Name: ${names}, Age: ${age}`);
// }

// * Variante 2: kompakter mit Arrow Function
const displayPerson = ({ names, age }) =>
  console.log(`Name: ${names}, Age: ${age}`);

// ? Alternative mit Default-Werten
// const displayPerson = ({
//   names: firstName = "Unknown",
//   age = "Unknown",
//   profession = "Unknown",
// }) => console.log(`Name: ${names}, Age: ${age}`);

displayPerson(person);
displayPerson(alice);
