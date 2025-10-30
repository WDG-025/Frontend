// # Kapitel 1 – Objekt-Grundlagen: Literale & Property-Zugriff
// * Ein Objekt fasst zusammengehörige Werte (Properties) in geschweiften Klammern zusammen.
const person = {
  firstName: "John",
  age: 40,
  isStudent: true,
  address: { street: "Sesame strett", houseNo: "40c", city: "Berlin" },
  "user-id": "00342", // * Property mit Bindestrich → nur mit eckigen Klammern zugreifbar
};

// * Punkt-Notation: direkt auf bekannte Property-Namen zugreifen
console.log(person.firstName);
console.log(person.address.city);

// * Klammer-Notation: dynamische Keys (z. B. aus Variablen) oder ungewöhnliche Namen ("user-id")
const whatUserClickedOn = "age";
console.log(person[whatUserClickedOn]);
console.log(person["user-id"]);

// # Kapitel 2 – Objekte sind veränderbar (mutierbar)
// * Auch wenn das Binding 'person' via const deklariert ist, dürfen die Properties geändert werden.
person.age = 45;
console.log(person.age);

// const array = [1, 4, 6];
// array[1] = 7; // * Auch Arrays sind Objekte → einzelne Elemente können verändert werden

// # Kapitel 3 – Shorthand Properties & Objekt-Literale
// * Wenn Variablen-Namen und gewünschte Property-Namen übereinstimmen, darf abgekürzt werden.
const make = "Toyota";
const model = "Corolla";
const year = 2025;

// const car = {
//   make: make,
//   model: model,
//   year: year,
// };

const car = {
  make, // * Shorthand für make: make
  model, // * Shorthand für model: model
  year, // * Shorthand für year: year
};

console.log(car.year);

// * Nachträglich Properties ergänzen
car.color = "Yellow";
console.log(car);

// # Kapitel 4 – Methoden in Objekten & 'this'
// * Methoden sind Funktionen als Properties eines Objekts.
const user = {
  firstName: "John",
  age: 40,
  isStudent: true,
  adress: { street: "Sesame strett", houseNo: "40c", city: "Berlin" },
  languages: ["english", "german", "spanish"],
  "user-id": "00342",
  sayHi() {
    console.log(`Hi my name is ${user.firstName}`); // ! Greift auf das äußere 'user' zu (fest verdrahtet)
    console.log(`Hi my name is ${this.firstName}`); // * Besser: 'this' referenziert das aufrufende Objekt
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
    console.log(`Hi my name is ${user.firstName}`); // ? Was passiert, wenn wir das Objekt später umbenennen?
    console.log(`Hi my name is ${this.firstName}`); // * robust gegenüber Umbenennung & Wiederverwendung
  },
  // # Achtung zu Arrow Functions in Methoden
  // * Arrow Functions binden 'this' lexikalisch (aus dem umgebenden Scope) – für Methoden oft unerwünscht.
  //   sayArrow: () => {
  //     console.log(`Hi my name is ${this.firstName}`); // ! 'this' zeigt hier NICHT auf user2
  //   },
};

user.sayHi();
user2.sayHi();
user2.firstName = "Jane"; // * Mutation zeigt, dass 'this' den aktuellen Zustand des Objekts nutzt
user2.sayHi();

// # Kapitel 5 – Eingebaute Objekte: Math & Date
// * Math: nützliche statische Hilfsfunktionen
console.log(Math.random() * 10);
console.log(Math.round(4.3));
console.log(Math.max(1, 5, 28));
console.log(Math.min(1, 5, 28));

// * Date: Zeitpunkt & Datum
const date = new Date(); // * Mit 'new' entsteht ein Date-Objekt
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + 1); // ! Monate sind 0-basiert → +1 für menschenlesbar
console.log(date.getDate());
console.log(date.getSeconds());

const birthDay = new Date("2000-01-01"); // * ISO-Format string → Datum
console.log(birthDay.getFullYear());

const date2 = Date(); // ! Ohne 'new' gibt Date() einen String zurück (nicht empfohlen für Date-APIs)
console.log(date2);

// # Kapitel 6 – Object Destructuring (inkl. Defaults, Alias, Nested)
// * Destructuring extrahiert Properties kompakt in Variablen.
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

// * Aliase, Default-Werte, verschachtelte Properties in einem Schritt
const {
  firstName: username, // * Alias: Variable heißt 'username' statt 'firstName'
  nationality = "Unkown nationality", // * Default/Fallback, falls Property nicht existiert
  age,
  isStudent,
  adress: { city }, // * Nested Destructuring
} = personD;

console.log(username);
console.log(age);
console.log(isStudent);
console.log(city);
console.log(nationality);

// nationality = "Spanish"; // ! Re-Assignment eines via Destructuring deklarierten const wäre ein Fehler
// console.log(nationality);

console.log(personD.nationality);
personD.nationality = "German";
console.log(personD.nationality);

// # Kapitel 7 – Array Destructuring & ungewöhnliche Zugriffe
const array = [3, 7, 9, 16];

// const first = array[0];
// const second = array[1];

const [, , , fourth] = array; // * Elemente überspringen mit führenden Kommata
// console.log(first);
// console.log(second);
console.log(fourth); // 16

const myArray = [
  // ... 56 elements
  "item at index 56",
  "item at index 57",
  // ... more elements
];

// * Arrays sind Objekte mit numerischen Keys → Objekt-Destructuring auf Index ist möglich
const { 57: item } = myArray;
console.log(item);
