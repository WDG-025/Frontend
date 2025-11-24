import { useEffect, useState } from "react";

export default function Effect() {
  const [todo, setTodo] = useState(null);
  const [count, setCount] = useState(0);

  const [myObj, setMyObj] = useState({ test: 42 });

  // useEffect als 'Hintertür'
  // Ermöglicht Zugriff auf Systeme außerhalb von React (
  // fetch, EventListeners, timer...
  // Signatur: useEffect(callback, dependencyArray);
  useEffect(() => {
    console.log("Effekt wird beim ersten Rendern durchgeführt");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []); // leeres Dependency Array: nur beim ersten Render

  useEffect(() => {
    console.log("Wird nach jedem Render ausgeführt");
  }); // ohne Dependency Array: nach jedem Rendern

  useEffect(() => {
    console.log(myObj);
    console.log("Wird immer ausgeführt nachdem sich 'myObj' verändert hat");
  }, [myObj]); // mit Variablen: immer, wenn sich Wert verändert
  // Achtung bei Objekten (+ Arrays, Funktionen): Wenn sich Referenz verändert wird auch Effekt neu ausgeführt!

  useEffect(() => {
    // Handler-Funktion separat gespeichert, damit removeEventListener darauf Bezug nehmen kann
    const handleResize = (e) => {
      console.log(e.target.innerWidth);
    };
    // Globaler Event Listener wird beim Zerstörend er Komponente
    // nicht automatisch entfernt
    window.addEventListener("resize", handleResize);

    // Aufräumen im return
    // -> return gibt Funktion zurück, die nach Zerstörung der Komponente ausgeführt wird
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {todo && <p>{todo.title}</p>}
      {/* State-Setter um re-rendering auszulösen */}
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
