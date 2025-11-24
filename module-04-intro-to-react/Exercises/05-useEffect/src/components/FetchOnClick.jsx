import { useCallback, useEffect, useState } from "react";

export default function FetchOnClick() {
  const [people, setPeople] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);

  // Komponenten-Status als String statt separate Booleans (weniger State)
  const [status, setStatus] = useState("loading"); // loading, error, success

  // useCallback: Memoized function
  // Signatur wie useEffect: useCallback(callback, dependencyArray)
  // - wird nur neu erstellt wenn dependencies sich ändern
  // Leeres dependency array [] = function wird nur einmal erstellt (Mount)
  const fetchData = useCallback(async (url) => {
    try {
      setStatus("loading");
      const res = await fetch(url);
      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      setPeople(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }, []); // Leeres dependency array = function ist stabil und ändert sich nie

  // Initialer Fetch beim Component Mount
  // fetchData ist jetzt stabil dank useCallback → kein infinite loop
  useEffect(() => {
    fetchData("https://swapi.tech/api/people");
  }, [fetchData]); // useEffect verlangt nach dieser Dependency -> muss stabilisiert werden

  // Event Handler rufen fetchData direkt auf (nicht über State-Änderung)
  // Direkter, synchroner Ansatz statt State-driven -> weniger re-renders
  const handlePrev = () => fetchData(prevUrl);
  const handleNext = () => fetchData(nextUrl);

  return (
    <main className="min-h-screen bg-gray-900 p-8 font-sans">
      <h1 className="text-center text-3xl font-bold text-gray-300">
        Star Wars Characters | Fetch on Click
      </h1>

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

      {/* Status-basiertes Conditional Rendering (statt mehrerer Booleans) */}
      {status === "loading" && (
        <p className="text-center font-medium text-gray-600">Loading...</p>
      )}

      {status === "error" && (
        <p className="text-center font-semibold text-red-500">
          Sorry, try again :(
        </p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2">
        {/* Liste nur bei Erfolg rendern - expliziter Status-Check */}
        {status === "success" &&
          people?.map((person) => (
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
