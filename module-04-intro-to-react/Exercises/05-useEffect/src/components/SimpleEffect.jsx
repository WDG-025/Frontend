import { useEffect, useState } from "react";

export default function SimpleEffect() {
  // State für die geladenen Personen-Daten
  const [people, setPeople] = useState(null);

  // Aktuelle URL für den API-Call - wenn sich diese ändert, wird ein neuer Fetch ausgelöst
  const [url, setUrl] = useState("https://swapi.tech/api/people");

  // URLs für Pagination (vor/zurück blättern)
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  // Loading-Status um Spinner/Loading-Text zu zeigen
  const [loading, setLoading] = useState(true);

  // Error-Status um Fehlermeldungen anzuzeigen
  const [error, setError] = useState(null);

  // useEffect wird ausgeführt wenn sich 'url' ändert (dependency array: [url])
  useEffect(() => {
    // Async function innerhalb des useEffect (useEffect selbst kann nicht async sein)
    const fetchData = async (url) => {
      try {
        setLoading(true); // Loading-Status aktivieren
        const res = await fetch(url); // API-Call ausführen

        // Prüfen ob Request erfolgreich war (Status 200-299)
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json(); // Response zu JSON konvertieren
        console.log(data);

        // State mit neuen Daten aktualisieren
        setPeople(data.results);
        setNextUrl(data.next); // URL für nächste Seite
        setPrevUrl(data.previous); // URL für vorherige Seite
      } catch (err) {
        // Bei Fehlern: Error-State setzen
        setError(err.message);
      } finally {
        // Wird immer ausgeführt (egal ob success oder error)
        setLoading(false);
      }
    };

    fetchData(url); // Fetch-Function aufrufen
  }, [url]); // Dependency Array: Effect läuft nur wenn sich 'url' ändert

  // Handler für Pagination-Buttons
  const handlePrev = () => setUrl(prevUrl); // URL ändern → triggert useEffect
  const handleNext = () => setUrl(nextUrl); // URL ändern → triggert useEffect

  return (
    <main className="min-h-screen bg-gray-900 p-8 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-300">
        Star Wars Characters | Fetch on State Change
      </h1>

      {/* Pagination Buttons - nur anzeigen wenn URLs vorhanden */}
      <div className="flex justify-center gap-4 pt-6">
        {prevUrl && (
          <button type="button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {nextUrl && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>

      {/* Conditional Rendering basierend auf Loading/Error State */}
      {loading && (
        <p className="text-center font-medium text-gray-600">Loading...</p>
      )}

      {error && (
        <p className="text-center font-semibold text-red-500">
          Sorry, try again :(
        </p>
      )}

      {/* Liste der Charaktere - nur rendern wenn people vorhanden ist */}
      <ul className="grid gap-4 sm:grid-cols-2">
        {people?.map((person) => (
          <li
            key={person.uid}
            className="rounded bg-white p-4 text-center capitalize shadow"
          >
            <span className="font-semibold text-gray-800">{person.name}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
