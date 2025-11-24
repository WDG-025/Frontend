import { useEffect, useState } from "react";

export default function FetchInEffect() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Effect-Funktion nicht async
  useEffect(() => {
    const controller = new AbortController(); // zum Abbrechen des Fetch-Calls

    // async/await in extra Funktion
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Aufruf innerhalb des Effekts
    fetchData();

    // Aufräumfunktion bricht Fetch ab.
    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {todos.map((item) => (
        <article key={item.id}>
          <h2>
            {item.title} <span>{item.completed ? "✅" : "❌"}</span>{" "}
          </h2>
        </article>
      ))}
    </div>
  );
}
