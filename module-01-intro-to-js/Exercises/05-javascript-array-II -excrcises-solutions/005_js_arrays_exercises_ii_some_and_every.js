// You can work here or download the template!
const numbers = [4, 8, 15, 16, 23, 42];

// 2.
const hasNumbersGreaterThan20 = numbers.some((num) => num > 20);
console.log("Gibt es Zahlen größer als 20? ", hasNumbersGreaterThan20);

// 3.
const hasNumbersLessThan50 = numbers.every((num) => num < 50);
console.log("Sind alle Zahlen kleiner als 50?", hasNumbersLessThan50);

// 4.
const students = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

// 5.
const hasAnyStudentFailed = students.some((person) => person.passed === false);
console.log("Ist jemand durchgefallen? ", hasAnyStudentFailed);

// 6.
const allStudentsOlderThan18 = students.every((per) => per.age >= 18);
console.log("Sind alle über 18? ", allStudentsOlderThan18);

// ======================================================
// ! ⭐ EXTRA CHALLENGES ⭐ + Method Chaining
// ======================================================

// ⭐ Extra Challenge #1: E-Commerce Produktfilterung
// * Reales Problem: Produkte im Shop anzeigen, die auf Lager und günstig sind.

const productsC = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Webcam", price: 40, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "USB Hub", price: 15, inStock: false },
];

// Aufgabe:
// 1. filter → Produkte, die auf Lager UND unter 50€ sind
// 2. map → Text-Strings für verfügbare Produkte erzeugen
// 3. forEach → jeden Text ausgeben

// --- Lösung ---
const affordableInStockProducts = productsC.filter(
  (product) => product.inStock && product.price < 50
);

const productAnnouncements = affordableInStockProducts.map(
  (product) => `${product.name} ist verfügbar für ${product.price}€.`
);

console.log("Verfügbare Angebote:");
productAnnouncements.forEach((announcement) => console.log(announcement));

// method chaining: Kurzversion in einer Kette:
console.log("Verfügbare Angebote:");
productsC
  .filter((product) => product.inStock && product.price < 50)
  .map((product) => `${product.name} ist verfügbar für ${product.price}€.`)
  .forEach((announcement) => console.log(announcement));

// ⭐ Extra Challenge #2: Datenbereinigung
// * Reales Beispiel: Benutzerdaten aufräumen

const userData = [
  "  justin_mason  ",
  "  emma_davis",
  null,
  "liam_miller   ",
  undefined,
  "olivia_jones",
];

// Aufgabe:
// 1. Entfernt alle Einträge, die keine Strings sind
// 2. Entfernt Leerzeichen am Anfang/Ende

// --- Lösung mit method chaining ---
const cleanedData = userData
  .filter((entry) => typeof entry === "string")
  .map((username) => username.trim());

console.log("Bereinigte Nutzerdaten:", cleanedData);
// Erwartet: ['justin_mason', 'emma_davis', 'liam_miller', 'olivia_jones']
