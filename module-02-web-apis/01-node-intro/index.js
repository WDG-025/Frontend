// ==========================================
// # 🧭 Argumente lesen
// ==========================================

// * process.argv ist ein Array, das alle Argumente enthält,
// * die beim Start des Node-Prozesses übergeben wurden.
console.log("process.argv: ", process.argv);

// * slice(2) entfernt die ersten beiden Standard-Einträge:
// * [0] = node-Pfad, [1] = Skript-Pfad
const args = process.argv.slice(2);
console.log("arguments: ", args);
// # Alternative Destrukturierung:
// const [, , inputOne, inputTwo] = args;

// ==========================================
// # 🛑 Eingabevalidierung
// ==========================================

// ! Prüft, ob genau zwei Argumente übergeben wurden
if (args.length !== 2) {
  console.error("❌ Bitte gib genau zwei Argumente an.");
  console.error("Verwendung: node index.js <Zahl1> <Zahl2>");
  process.exit(2); // * Exit-Code 2 = fehlerhafte Eingabe
}

// * Destrukturierung der beiden Argumente aus dem Array
const [inputOne, inputTwo] = args;
// ? Alternative Überprüfungen wären auch möglich:
// if (!inputOne || !inputTwo) { ... }
// if (inputOne === undefined || inputTwo === undefined) {}

// ==========================================
// # 🔢 Typumwandlung
// ==========================================

// * Number() wandelt String → Number (liefert NaN, falls ungültig)
const num1 = Number(inputOne);
const num2 = Number(inputTwo);

// # Alternative Kurzschreibweise:
// const num1 = +inputOne;
// const num2 = +inputTwo;

// * Unterschiedliche Parsing-Funktionen (zum Vergleich):
// Number("42.2px") → NaN && Number("42.2") → 42.2
// parseInt("42.2px") → 42
// parseFloat("42.2px") → 42.2

// ==========================================
// # ⚠️ Fehlerbehandlung bei NaN
// ==========================================

// ! Prüft, ob eine der Zahlen kein gültiger numerischer Wert ist
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.error("❌ Beide Argumente müssen gültige Zahlen sein.");
  process.exit(2);
}

// # isNaN vs. Number.isNaN:
// Number.isNaN() prüft, ob der Wert NaN ist. NaN = true, ansonsten = false.
// Ideal, wenn die Werte vorher bereits mit Number() konvertiert wurden und number oder NaN sind.
//       Number.isNaN("hello") → false
//       Number.isNaN(5)       → false
//       Number.isNaN(NaN)     → true
//
// isNaN() wandelt Werte zuerst in Zahlen um und prüft dann auf NaN.
//       isNaN("hello") → true
//       isNaN(5)       → false
//       isNaN(NaN)     → true
//
// typeof NaN === "number" → daher ist typeof für diese Prüfung ungeeignet

// ==========================================
// # ➕ Berechnung & Ausgabe
// ==========================================

// * Addiert die beiden Zahlen und gibt das Ergebnis formatiert aus
const sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

// ==========================================
// # 🚪 Beenden des Prozesses
// ==========================================

process.exit(0); // Mit process.exit(0) wird das Programm erfolgreich beendet

// * Häufige Exit-Codes (Konvention):
// 0 = Erfolgreiche Ausführung
// 1 = Allgemeiner Fehler
// 2 = Fehlende / ungültige Eingabe
// >2 = Andere Fehler
