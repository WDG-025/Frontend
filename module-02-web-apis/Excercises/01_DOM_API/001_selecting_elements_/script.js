// Elemente auswählen
// ==================

// #### Ziel

// In dieser Übung wirst du mit der DOM API arbeiten, um mit einer einfachen HTML-Seite zu interagieren.
// Du wirst Elemente auswählen, sie in der Konsole ausgeben, ihre Styles verändern und dynamisch Inhalte hinzufügen.

// Alle Anweisungen sollen **innerhalb der JavaScript-Datei** umgesetzt werden –
// klar, du könntest das auch über die CSS-Datei machen, aber wo bleibt da der Spaß?

// ### Anweisungen

// 1.  **Elemente auswählen und in der Konsole ausgeben**:

//     *   Wähle das `h1`-Element innerhalb des `.hero-content`-Divs aus und gib es in der Konsole aus.
const heading = document.querySelector(".hero-content h1");
console.log(heading.textContent);
//     *   Wähle alle `a`-Elemente innerhalb der `.nav-list` aus und gib sie in der Konsole aus.
const navLinks = document.querySelectorAll(".nav-list a");
console.log(navLinks);

//     *   Wähle das `.btn`-Element aus und gib es in der Konsole aus.
const btn = document.getElementsByClassName("btn")[0];
console.log(btn.textContent);

// 2.  **Styles verändern**:

//     *   Ändere die Hintergrundfarbe des `.header`-Elements zu `#b5651d`.
const header = document.querySelector(".header");
header.style.backgroundColor = "#b5651d";

//     *   Ändere die Schriftgröße des `h1`-Elements innerhalb des `.hero-content`-Divs auf `3rem`.
heading.style.fontSize = "3rem";
//     *   Ändere die Textfarbe aller `a`-Elemente innerhalb der `.nav-list` zu `#faf0e6`.
navLinks.forEach((link) => (link.style.color = "#faf0e6"));
// for (const element of navLinks) {
//   element.style.color = "#faf0e6";
// }

// 3.  **Inhalte hinzufügen**:

//     *   Wähle das `.hero-content`-Div aus und füge ein neues `p`-Element mit dem Text
//         „Open daily from 7 AM to 9 PM.“ darin hinzu.
// const hero = document.querySelector(".hero-content");
// hero.appendChild(document.createElement("p"));
// document.querySelector(".hero-content :last-child").textContent =
//   "Open daily from 7 AM to 9 PM.";

const hero = document.querySelector(".hero-content");
const newP = document.createElement("p");
newP.textContent = "Open daily from 7 AM to 9 PM.";
hero.append(newP);
