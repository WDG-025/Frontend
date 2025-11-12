// String im localStorage speichern (Key: 'hello', Value: 'world')
localStorage.setItem('hello', 'world');

// Wert aus localStorage auslesen
const data = localStorage.getItem('hello');

console.log('Aus dem localStorage: ', data);

// Zahl speichern (wird automatisch zu String konvertiert)
localStorage.setItem('myNumber', 42);

// String aus localStorage holen und zu Zahl konvertieren
const num = +localStorage.getItem('myNumber');

console.log(num === 42);

// Komplexes Objekt mit verschachtelten Eigenschaften
const user = {
  imageUrl: 'https://blblbl.com',
  lastSeen: 17294583,
  nestedObj: {
    theme: true,
  },
  myMethod() {
    console.log('Test');
  },
};

// Objekt in JSON-String umwandeln, um es speichern zu können
// Methoden gehen dabei verloren
localStorage.setItem('user', JSON.stringify(user));

// JSON-String aus localStorage holen (noch kein Objekt!)
const userFromLS = localStorage.getItem('user');

// JSON-String zurück in JavaScript-Objekt parsen
const userObj = JSON.parse(userFromLS);

console.log('userFromLS', userFromLS); // String
console.log('userObj', userObj); // Objekt

// sessionStorage funktioniert wie localStorage, aber nur für aktuelle Session
sessionStorage.setItem('sessionInfo', 42);

// Einzelnen Eintrag löschen
localStorage.removeItem('myNumber');

// Kompletten localStorage leeren
localStorage.clear();
