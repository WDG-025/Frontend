// Elemente erstellen
// ==================

// #### Ziel

// In dieser Übung wirst du JavaScript verwenden, um eine komplette Webseite von Grund auf zu erstellen.

// Du wirst den gesamten HTML-Content (Inhalt) dynamisch generieren und CSS-Styles mithilfe der JavaScript-Eigenschaft `element.style` anwenden.

// ### Anweisungen

// 1.  **HTML-Struktur erstellen**:

//     *   Erstelle ein `header`-Element mit einem `nav` (Navigationsbereich) darin.
const body = document.querySelector("body");
const header = document.createElement("header");
body.append(header);

const nav = document.createElement("nav");
header.append(nav);

//     *   Innerhalb des `nav` erstelle ein `a`-Element mit der Klasse `logo` und dem Text „Coffee Shop“.
const logo = document.createElement("a");
// logo.classList.add("logo");
logo.className = "logo";

logo.textContent = "Coffee Shop";
nav.append(logo);
//     *   Erstelle ein `ul`-Element mit der Klasse `nav-list`.
// Innerhalb des `ul` erstelle vier `li`-Elemente mit der Klasse `nav-item`,
// die jeweils ein `a`-Element enthalten mit den Texten „Home“, „Menu“, „About“ und „Contact“.
const navList = document.createElement("ul");
navList.className = "nav-list";
nav.append(navList);

const navArray = ["Home", "Menu", "About", "Contact"];

navArray.forEach((navText) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  li.style.marginLeft = "1.5rem";
  a.textContent = navText;
  a.style.textDecoration = "none";
  a.style.color = "#333";
  a.style.fontWeight = "bold";

  li.append(a);
  navList.append(li);
});

// 2.  **Hero-Section erstellen**:

//     *   Erstelle ein `section`-Element mit der Klasse `hero`.
const hero = document.createElement("section");
hero.className = "hero";
body.appendChild(hero);
//     *   Innerhalb der `hero`-Section erstelle ein `div` mit der Klasse `hero-content`.
const heroContent = document.createElement("div");
heroContent.className = "hero-content";
hero.appendChild(heroContent);
//     *   Innerhalb des `div` erstelle ein `h1`-Element mit dem Text „Welcome to Our Coffee Shop“.
const h1 = document.createElement("h1");
h1.textContent = "Welcome to Our Coffee Shop";
heroContent.appendChild(h1);
//     *   Füge ein `p`-Element mit dem Text „Enjoy the best coffee in town.“ hinzu.
const p = document.createElement("p");
p.textContent = "Enjoy the best coffee in town.";
heroContent.appendChild(p);
//     *   Füge ein `a`-Element mit der Klasse `btn` und dem Text „Explore Our Menu“ hinzu.
const btn = document.createElement("a");
btn.textContent = "Explore Our Menu";
heroContent.appendChild(btn);

// 3.  **Footer erstellen**:

//     *   Erstelle ein `footer`-Element mit der Klasse `footer`.
const footer = document.createElement("footer");
footer.className = "footer";
body.appendChild(footer);
//     *   Innerhalb des `footer`-Elements erstelle ein `p`-Element mit dem Text „© 2024 Coffee Shop. All rights reserved.“.
const footerP = document.createElement("p");
footerP.textContent = "© 2025 Coffee Shop. All rights reserved.";
footer.appendChild(footerP);

// 4.  **CSS-Styles mithilfe von JavaScript anwenden**:

//     *   Verwende JavaScript, um den folgenden CSS-Styles mithilfe von `element.style` (Style-Eigenschaft eines Elements) anzuwenden:
//         *   `.header`: background-color: #fff, box-shadow (Schatten): 0 2px 4px rgba(0, 0, 0, 0.1), padding: 1rem 0.
header.style.backgroundColor = "#fff";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
header.style.padding = "1rem 0";
//         *   `.nav`: display: flex, justify-content (horizontal ausrichten): space-between, align-items (vertikal ausrichten): center, max-width: 1200px, margin: 0 auto, padding: 0 1rem.
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.maxWidth = "1200px";
nav.style.margin = "0 auto";
nav.style.padding = "0 1rem";
//         *   `.logo`: font-size (Schriftgröße): 1.5rem, font-weight (Schriftstärke): bold, color (Farbe): #333, text-decoration (Textdekoration): none.
logo.style.fontSize = "1.5rem";
logo.style.fontWeight = "bold";
logo.style.color = "#333";
logo.style.textDecoration = "none";
//         *   `.nav-list`: display: flex, list-style (Aufzählungszeichen): none.
navList.style.display = "flex";
navList.style.listStyle = "none";
//         *   `.nav-item`: margin-left (linker Außenabstand): 1.5rem.

//         *   `.nav-item a`: text-decoration: none, color: #333, font-weight: bold.
//         *   `.hero`: height (Höhe): 560px, background (Hintergrund): url("…") no-repeat center center/cover, color: #fff.

hero.style.height = "560px";
hero.style.background =
  'url("https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1") no-repeat center center/cover';
hero.style.color = "#fff";
//         *   `.hero-content`: max-width: 600px, height: 100%, display: flex, flex-direction (Ausrichtung): column, justify-content: space-around, align-items: center, text-align: center.
heroContent.style.maxWidth = "600px";
heroContent.style.height = "100%";
heroContent.style.display = "flex";
heroContent.style.flexDirection = "column";
heroContent.style.justifyContent = "space-around";
heroContent.style.alignItems = "center";
heroContent.style.textAlign = "center";
//         *   `.hero-content h1`: font-size: 2.5rem, margin-bottom (unterer Außenabstand): 1rem.
h1.style.fontSize = "2.5rem";
h1.style.marginBottom = "1rem";

//         *   `.hero-content p`: font-size: 1.2rem, margin-bottom: 2rem.
p.style.fontSize = "1.2rem";
p.style.marginBottom = "2rem";

//         *   `.btn`: background-color: #333, color: #fff, padding (Innenabstand): 0.75rem 1.5rem, text-decoration: none, border-radius (Abrundung der Ecken): 5px, transition (Übergangseffekt): background-color 0.3s ease.
btn.style.backgroundColor = "#333";
btn.style.color = "#fff";
btn.style.padding = "0.75rem 1.5rem";
btn.style.textDecoration = "none";
btn.style.borderRadius = "5px";
btn.style.transition = "background-color 0.3s ease";

//         *   `.btn:hover`: background-color: #555. (Tipp: Du kannst dafür `mouseover`- und `mouseout`-Events (Maus-Events) verwenden.)
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "#555";
});

btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "#333";
});

//         *   `.footer`: background-color: #333, color: #fff, text-align (Textausrichtung): center, padding: 1rem 0, margin-top: auto.
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "1rem 0";
footer.style.marginTop = "auto";

// Ist das jetzt besonders praktisch? Ganz sicher nicht!
// Aber du musst dich mit der DOM API (Programmierschnittstelle für das Document Object Model) vertraut machen ❤️
