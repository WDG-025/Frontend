// Events hinzufügen
// =================

// ### Ziel

// In dieser Übung wirst du das Verknüpfen (Attaching) von Events mit Elementen in JavaScript üben.
// Außerdem wirst du den Unterschied zwischen `addEventListener` und den `onEvent`-Eigenschaften kennenlernen.

// ### Anweisungen

// 1.  **HTML-Struktur**:
//     *   Verwende die bereitgestellte HTML-Struktur, die drei Buttons und ein leeres `ul`-Element enthält.
// 2.  **JavaScript-Aufgaben**:
//     *   Verknüpfe ein Event mit dem ersten Button, um ein neues `li`-Element in der `ul` zu erstellen,
//         das eine zufällige Aufgabe aus dem bereitgestellten Array enthält.
//         *   Scrolle anschließend automatisch zum letzten Eintrag, damit er immer sichtbar ist!
//     *   Verknüpfe ein Event mit dem zweiten Button, das eine Alert-Nachricht (Popup) mit einer benutzerdefinierten Nachricht anzeigt.
//     *   Verknüpfe ein Event mit dem dritten Button, das eine benutzerdefinierte Nachricht in der Konsole ausgibt.

// Was würde passieren, wenn du statt `element.addEventListener('click', listener)`
// einfach `element.onclick = listener` verwenden würdest?
// Was sind die Unterschiede?

// Array mit 10 zufälligen Aufgaben als Strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

const addBtn = document.getElementById("add-item-btn");
const alertBtn = document.getElementById("alert-btn");
const logBtn = document.getElementById("console-btn");
const itemList = document.getElementById("item-list");

const taskArray = [];
addBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomIndex];
  const li = document.createElement("li");
  li.textContent = randomTask;
  itemList.appendChild(li);
  li.scrollIntoView({ behavior: "smooth" });

  taskArray.push(li.textContent);
});

alertBtn.addEventListener("click", handleClickAlert);

function handleClickAlert() {
  if (taskArray.length > 0) {
    alert(`Warnung: ${taskArray.join(", ")}`);
  } else {
    alert("Keine To-Do-Liste");
  }
}

logBtn.addEventListener("click", () => {
  console.log("Hehe");
});
