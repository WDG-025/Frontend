// You can work here or download the template!

// * Erstellen eines Objekts mit Objektliteral-Syntax
const book = {
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
  isRead: true,

  // * Methode innerhalb des Objekts
  summary() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead}`
    );
  },

  // # Methode zum Umschalten des Lesestatus
  toggleReadStatus() {
    this.isRead = !this.isRead; // ! logischer NOT-Operator für true/false
  },
};

// console.log(book);

// * Methode aufrufen und Status testen
book.toggleReadStatus();
book.summary(); // false → weil gerade umgeschaltet

book.toggleReadStatus();
book.summary(); // true → wieder zurück

// * Eine zweite Variante mit einer anonymen Funktion als Property
book.toggleReadStatusFunc = function () {
  this.isRead = !this.isRead;
  // ? Alternativ mit Ternary Operator:
  // this.isRead = this.isRead ? false : true;
};

// # Methodenaufruf zum Testen
book.toggleReadStatusFunc();
book.summary(); // false
