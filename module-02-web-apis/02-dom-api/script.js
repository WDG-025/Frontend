// # Kapitel 1: Elemente auswählen (Select)
// * DOM-APIs liefern je nach Methode HTMLCollection (live) oder NodeList (statisch)

// Einzelnes Element via ID
const subHeading = document.getElementById("sub-heading");
console.log("getElementById:", subHeading);

// Mehrere Elemente via class (HTMLCollection: live)
const paras = document.getElementsByClassName("para");
console.log("getElementsByClassName:", paras);

// Mehrere Elemente via Tag/Element-Name (HTMLCollection: live)
const parasByTagName = document.getElementsByTagName("p");
console.log("getElementsByTagName:", parasByTagName);

// * Query Selector (CSS-Selektoren)
// ? querySelectorAll gibt eine *statische* NodeList zurück
const subHeadingUsingQS = document.querySelector("#sub-heading");
console.log("querySelector:", subHeadingUsingQS);

const parasUsingQS = document.querySelectorAll(".para");
console.log("querySelectorAll:", parasUsingQS);

const firstParaUsingQS = document.querySelector(".para");
console.log("firstParaUsingQS:", firstParaUsingQS);

// Button auswählen
const changeColorBtn = document.getElementById("change-color-btn");
// const changeColorBtn = document.querySelector("#change-color-btn");

// # Kapitel 2: Elemente verändern (Manipulate)
subHeading.innerText = "JavaScript ist super cool!"; // * Textinhalt setzen
subHeading.style.color = "red"; // * Inline-Style (für schnelle Demos ok)

// * Klassen-API (vorzuziehen gegenüber direkten Style-Änderungen)
subHeading.classList.add("m-2", "bg-red-500");
subHeading.classList.remove("bg-red-500");

// * Iteration über HTMLCollection (paras)
for (let i = 0; i < paras.length; i++) {
  console.log("paras[i]:", paras[i]);
}

// * For..of ist oft lesbarer
for (const para of paras) {
  console.log("textContent:", para.textContent);
  para.style.color = "blue";
}

// * HTMLCollection → echtes Array (z. B. für map/filter/reduce)
const parasArray = [...paras];
console.log("parasArray:", parasArray);

// # Kapitel 3: Elemente erstellen (Create)
const paraContainer = document.querySelector(".para-container");

const createPara = (text) => {
  const newPara = document.createElement("p");
  newPara.textContent = text;
  // ! Sicherheits-Hinweis:
  // newPara.innerHTML = userInput;  // <script>ATTACK!</script> → XSS-Risiko
  // * textContent ist hier sicher (escaped)
  newPara.setAttribute("class", "para");

  // * An den Container anhängen (statt document.body)
  paraContainer.appendChild(newPara);
};

createPara("JS created this paragraph");
createPara("JS created this paragraph again");

// # Kapitel 3b: Unterschied zwischen textContent und innerHTML

// * Beispiel: neues Element mit HTML-Struktur erzeugen
const htmlExample = document.createElement("div");

// * Variante A: Nur Text (Tags werden als Text angezeigt)
htmlExample.textContent = "<strong>Hello</strong> world (textContent)";
paraContainer.appendChild(htmlExample);

// * Variante B: Echte HTML-Struktur (Tags werden interpretiert)
const htmlExample2 = document.createElement("div");
htmlExample2.innerHTML = "<strong>Hello</strong> world (innerHTML)";
paraContainer.appendChild(htmlExample2);

// # Kapitel 4: Events & Interaktion
// * Handler klar benennen → besser lesbar/testbar
const handleClick = () => {
  // * Toggle zwischen zwei Zuständen
  const newColor = subHeading.style.color === "blue" ? "red" : "blue";
  subHeading.style.color = newColor;
};

// * Event-Listener registrieren (Preferred gegenüber onClick-Attributen)
changeColorBtn.addEventListener("click", handleClick);
