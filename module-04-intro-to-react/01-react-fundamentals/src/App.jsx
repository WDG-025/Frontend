import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import StudentList from "./components/StudentList";

function App() {
  // ! Hier definieren wir Variablen und Funktionen mit ganz normalem JavaScript (innerhalb der Komponente)
  const name = "Elsa";

  // * Kleine Hilfsfunktion: wird direkt im JSX aufgerufen
  const add = (num1, num2) => {
    return num1 + num2;
  };

  const students = ["Elsa", "Dandy", "Monica"];

  // * Event-Handler für das Formular
  // ? preventDefault verhindert das Neuladen der Seite und wir lesen den Wert aus dem Input
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target["user-email"].value);
  };

  // ! Hier wird das User-Interface definiert mittels JSX
  return (
    <>
      {/* * Drei NavBar-Komponenten mit unterschiedlichen Props (title und user) */}
      <NavBar title="React Fundamentals" user="Renke" />
      <NavBar title="Dashboard" user="Morle" />
      <NavBar title="Something" user="Arne" />

      {/* * Card-Komponente mit verschachtelten JSX-Kindern (über props.children) */}
      <Card>
        <h2>Hello!</h2>
        <p>This text is inside the Card Component.</p>
      </Card>

      {/* # Beispiele für dynamische Werte im JSX (Variablen und Funktionsaufrufe) */}
      <h1>Hello {name.toUpperCase()}</h1>
      <h2>Sum of 4 and 5 is: {add(4, 5)}</h2>
      <h2>{students[1]}</h2>

      {/* * Liste von Studierenden aus einem separaten Datenmodul */}
      <StudentList />

      {/* * Button mit Inline-Event-Handler (onClick) */}
      <button
        type="button"
        onClick={() => {
          alert("Button was clicked");
        }}
      >
        Alert
      </button>

      {/* * Formular, dessen Absenden von handleSubmit behandelt wird */}
      <form onSubmit={handleSubmit}>
        <input
          className="border-2"
          type="email"
          placeholder="Email"
          name="user-email"
        />
        <button type="submit">Submit email</button>
      </form>

      <Footer />
    </>
  );
}

export default App;
