// # Kapitel 1: Funktionen – Grundlagen
// * Ziel: kleine, reine Funktionen schreiben und Rückgabewerte verstehen

function add(num1, num2) {
  // * Guard Clause: Sonderfall früh abfangen
  if (num1 === 0 && num2 === 0) {
    // * Kleine Rechtschreibkorrektur: "ints" → "integers"
    return "Please add positive integers";
  }

  // * Happy Path: normale Addition
  return num1 + num2;

  // ! Unreachable Code: alles hinter 'return' wird nie ausgeführt
  console.log("Function end");
}

// * Beispielaufrufe
console.log(add(3, 5));
console.log(add(0, 0));

function addMult(num1, num2) {
  // * Klammerung hilft, die Auswertungsreihenfolge zu verdeutlichen
  return (num1 + num2) * 2;
}

// * ES6+ Arrow Function – gleiche Logik, andere Syntax
const addArrowFunc = (num1, num2) => (num1 + num2) * 2;

console.log(addArrowFunc(4, 5));

// # Kapitel 2: Higher-Order Functions (HOF)
// * Definition: Eine Funktion, die Funktionen entgegennimmt oder zurückgibt

// # 1) Eine Funktion, die eine andere Funktion als Argument (Callback) akzeptiert
function higherOrderFunc(func) {
  // * Delegation: Übergibt Kontrolle an das Callback
  func();
}

// * Callback Function
function callbackFunction() {
  console.log(`Hi, I'm a regular function`);
}

higherOrderFunc(callbackFunction);

// * Inline-Callback als Arrow Function (anonyme Funktion)
higherOrderFunc(() => console.log(`Hi, I'm a regular function`));

// # 2) Eine Funktion, die eine andere Funktion zurückgibt (Closure)
function multiplier(factor) {
  // * Returned Function "merkt" sich 'factor' (Closure)
  return (number) => {
    return number * factor;
  };
}

const double = multiplier(2);
// * Entspricht:
// (number) => {
//   return number * 2;
// }

const triple = multiplier(3);
// * Entspricht:
// (number) => {
//   return number * 3;
// }

console.log(double(3)); // * Erwartung: 3 * 2 = 6
console.log(triple(4)); // * Erwartung: 4 * 3 = 12

// # Kapitel 3: Higher-Order Array-Methoden – Praxis
const numbers = [1, 2, 3, 4, 5];

// * .forEach() – iteriert, gibt aber kein neues Array zurück
numbers.forEach((num, index) => {
  console.log(`Element ${index}: ${num}`);
  // ! wir mutieren das Original-Array:
  numbers[index] = num * 10;
});

// * .map() – projiziert Werte in ein neues Array
const doubleNumbers = numbers.map((num) => {
  // * Erstes 'return' beendet die Funktion bereits
  return num * 2;

  // ! Dead Code: wird nie erreicht
  return 5;
});

console.log(numbers);
console.log(doubleNumbers);

// * Mini-"Datenbank": Array von Objekten
const people = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 35 },
  { name: "Dave", age: 20 },
];

// * .map() zum Erweitern/Transformieren von Objekten (ohne Originale zu ändern)
const updatedPeople = people.map((person) => {
  return { ...person, age: person.age + 1, isStudent: true };
});

console.log("Updated people: ", updatedPeople);

// * Schnelle Projektion nur der Namen in UPPERCASE
const namesUpperCase = people.map((person) => person.name.toUpperCase());
console.log(namesUpperCase);

// ? Alternative mit .forEach() (imperativ) statt .map() (deklarativ)
// const namesUpperCaseforEach = [];
// people.forEach((person) => {
//   namesUpperCaseforEach.push(person.name.toUpperCase());
// });
// console.log(namesUpperCaseforEach);

// # Kapitel 4: Spread-Syntax – Kopieren & Zusammenführen
// * Arrays
const animals = ["tiger", "zebra", "lion", "giraffe"];

// ? Warum nicht direkte Zuweisung?
// const copyOfAnimals = animals; // ! Gleiche Referenz: Änderungen wirken auf beide Namen

// * Korrekt: flache Kopie per Spread (neue Referenz)
const copyOfAnimals = [...animals];
copyOfAnimals[0] = "elephant";
console.log(animals);
console.log(animals === copyOfAnimals); // * false: unterschiedliche Referenzen

// * Objekte
const person = { firstName: "Alice", age: 15 };

// ? Direkte Zuweisung kopiert nur die Referenz
// const copyOfPerson = person;

// * Kopie + Überschreiben/Erweitern von Properties
const copyOfPerson = { ...person, age: 50, isStudent: false };
console.log(copyOfPerson);
console.log(copyOfPerson === person); // false
// # Hintergrund: Objekte werden per Referenz verglichen, nicht inhaltlich

// # Kapitel 5: Suchen & Filtern in Arrays von Objekten

// * .find() – erstes Element, das die Bedingung erfüllt (oder undefined)
const peopleNew = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 35 },
  { name: "Dave", age: 30 },
];

const firstPersonOver25 = peopleNew.find((person) => person.age > 25);
console.log(firstPersonOver25);

// * .filter() – erstellt neues Array mit allen Elementen, die die Bedingung erfüllen
const allPeopleOver17 = peopleNew.filter((person) => person.age >= 18);
console.log(allPeopleOver17);

// ? Imperative Alternative (zum Vergleich):
// const allPeopleOver17While = [];
// let index = 0;
// while (index < peopleNew.length) {
//   const person = peopleNew[index];
//   if (person.age >= 18) {
//     allPeopleOver17While.push(person);
//   }
//   index++;
// }
// console.log(allPeopleOver17While);

// * .some() & .every() – Existenz-/Allquantor-Prüfungen
const isAnyoneAChild = peopleNew.some((person) => person.age < 18);
console.log(isAnyoneAChild); // * true, wenn mindestens eine Person < 18 ist

const areAllAdults = peopleNew.every((person) => person.age >= 18);
console.log(areAllAdults); // * true, wenn alle ≥ 18 sind

// # Kapitel 6: .reduce() – auf einen einzelnen Wert reduzieren
// * Summiert alle 'age'-Werte der Personen
const totalAge = peopleNew.reduce((acc, person) => acc + person.age, 0);
console.log(totalAge);

// * Muster (zur Erinnerung):
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// * Schritt-für-Schritt-Debug-Ausgabe mit reduce
// * Erwartung:
// 0 + 15 = 15
// 15 + 16 = 31
// 31 + 17 = 48
// 48 + 18 = 66
// 66 + 19 = 85
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

// # Recap
// * forEach: iterieren (Side Effects möglich), kein Rückgabearray
// * map: neues Array (Transformation), keine Mutation nötig
// * find: erstes passendes Element
// * filter: alle passenden Elemente (neues Array)
// * some/every: Existenz/Alle-Bedingungen prüfen
// * reduce: zu einem Wert aggregieren (z. B. Summe, Durchschnitt, Objektaufbau)
