// Formulare absenden
// ==================

// ### Ziel

// In dieser Übung wirst du ein einfaches Kontaktformular erstellen und JavaScript verwenden,
// um die Formularübermittlung (Form Submission) zu verarbeiten, die Eingabefelder zu validieren
// und die übermittelten Daten anzuzeigen.

// ### Anweisungen:

// *   Füge einen Event Listener hinzu, um die Formularübermittlung zu behandeln.
// *   Prüfe (validiere), dass alle Felder nicht leer sind.
//     *   Wenn die Validierung erfolgreich ist, gib die Formulardaten in der Konsole aus
//         und zeige sie im `p`-Element als Liste (`ul`) an.
//     *   Wenn nicht, gib eine Fehlermeldung im `p`-Element aus
//         und style sie als Fehler — vielleicht etwas Rot und Auffälliges?
//     *   [Achte darauf, zwischen Error- und Success-Styles zu wechseln (toggle)](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)!
//     *   Leere anschließend die Formularfelder.

// In einem echten Anwendungsszenario würden wir eine weitere Web API verwenden,
// um die Formulardaten über das Netzwerk zu senden – etwa zum Speichern von Daten,
// Registrieren eines Benutzers, Erstellen einer Bestellung, Durchführen einer Zahlung
// und vielem mehr.
// Diese andere Web API heißt **Fetch API**. Darüber sprechen wir schon bald!

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextArea = document.querySelector("#message");

const output = document.querySelector("#output");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageTextArea.value.trim();

  console.log(name, email, message);

  //   if (!name.value || !email.value || !message.value) {
  //     output.textContent = "Please fill out all fields";
  //     output.classList.remove("bg-green-500");
  //     output.classList.add("bg-red-500");

  //   } else {
  //     output.innerHTML = `<ul>
  //         <li>${name}</li>
  //         <li>${email}</li>
  //         <li>${message}</li>
  //         </ul>`;
  //     output.classList.remove("bg-red-500");
  //     output.classList.add("bg-green-500");

  //     contactForm.reset();
  //   }

  try {
    if (!name) {
      throw new Error("Name is required");
    }

    if (!email) {
      throw new Error("Email is required");
    }

    if (!message) {
      throw new Error("Message is required");
    }

    output.innerHTML = `<ul>
          <li>${name}</li>
          <li>${email}</li>
          <li>${message}</li>
          </ul>`;
    output.classList.remove("bg-red-500");
    output.classList.add("bg-green-500");

    contactForm.reset();
    // e.target.reset();
  } catch (error) {
    output.textContent = error.message;
    output.classList.remove("bg-green-500");
    output.classList.add("bg-red-500");
  }
});
