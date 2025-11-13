// Konstante für den localStorage-Schlüssel, um Tippfehler zu vermeiden
const LOCALSTORAGE_TASKS = 'tasks';

// DOM-Elemente
const form = document.querySelector('form');
const userInput = document.getElementById('userInput');
const ul = document.querySelector('ul');

// Hilfsfunktion: Daten aus localStorage lesen und als Array zurückgeben
// Falls nichts gespeichert ist, wird ein leeres Array zurückgegeben
const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];

// Hilfsfunktion: Daten als JSON-String in localStorage speichern
const writeToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// Form Submit

const handleFormSubmit = (e) => {
  e.preventDefault(); // Verhindert Standard-Formularverhalten (Seiten-Reload)

  const inputVal = userInput.value.trim();

  // Validierung: Leere Eingaben verhindern
  if (!inputVal) {
    alert('Input field cannot be empty');
    return;
  }

  // Neues Task-Objekt mit eindeutiger ID erstellen
  const newTask = {
    content: inputVal,
    id: 'task-' + crypto.randomUUID(),
  };

  // manuelle Variante ohne Hilfsfunktion und ?? Operator
  // let tasks = localStorage.getItem('tasks');
  // if (!tasks) {
  //   tasks = [];
  // } else {
  //   tasks = JSON.parse(tasks);
  // }

  // Bestehende Tasks aus localStorage holen
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);

  // Neue Task hinzufügen und wieder speichern
  tasks.push(newTask);
  writeToStorage(LOCALSTORAGE_TASKS, tasks);

  // UI aktualisieren
  createLi(newTask);

  // Formular zurücksetzen (Input-Feld leeren)
  form.reset();
};

// Create Li

const createLi = (task) => {
  // DOM-Elemente für eine Task erstellen
  const newLi = document.createElement('li');
  const newP = document.createElement('p');
  const deleteBtn = document.createElement('button');

  newLi.className = 'flex gap-4 items-baseline px-4 justify-between';
  newP.textContent = task.content;
  deleteBtn.className = 'mt-5 px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded';
  deleteBtn.textContent = 'Delete';

  // Delete-Funktionalität: Task aus localStorage entfernen
  deleteBtn.addEventListener('click', () => {
    const tasks = getFromStorage(LOCALSTORAGE_TASKS);
    // Alle Tasks außer der gelöschten behalten
    // (task ist Verfügbar hier im Scope -> Closure)
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    writeToStorage(LOCALSTORAGE_TASKS, updatedTasks);

    // Element aus dem DOM entfernen
    newLi.remove();
  });

  // Elemente zusammensetzen
  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);

  // Am Anfang der Liste einfügen (neueste Tasks oben)
  ul.prepend(newLi);
};

// renderStorage

// Beim Laden der Seite: Alle gespeicherten Tasks aus localStorage anzeigen
const renderStorage = () => {
  const tasks = getFromStorage(LOCALSTORAGE_TASKS);
  tasks.forEach((t) => {
    createLi(t);
  });
};

// Event Listener
form.addEventListener('submit', handleFormSubmit);

// Alternative Event-Listener (auskommentiert):
// document.addEventListener('DOMContentLoaded', renderStorage); // Wartet auf DOM
// window.addEventListener('load', renderStorage); // Wartet auf alle Ressourcen

// mit defer oder type="module" ist direkte Ausführung auch sicher
renderStorage();
