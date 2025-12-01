/** biome-ignore-all lint/correctness/useUniqueElementIds: <not now> */
import { useActionState } from "react";
// import { ErrorBoundary } from 'react-error-boundary';
// import ErrorFallback from './components/ErrorFallback.jsx';
import SubmitBtn from "./components/SubmitBtn.jsx";
import { sleep, validate } from "./utils/index.js";

// action Funktion anstelle des Submit Handlers
// Hat in Verbindung mit useActionState-Hook Zugriff auf
// vorherigen State und die Formulardaten
async function action(_prevState, formData) {
  console.log(_prevState);
  const data = Object.fromEntries(formData); // FormData in Objekt einlesen
  const validationErrors = validate(data);

  if (Object.keys(validationErrors).length === 0) {
    // hier würde Netzwerkrequest stattfinden
    await sleep(2000); // Simulate network delay
    console.log("Submitted:", data);
    alert("Form submitted successfully!");

    // Rückgabe kommt in state
    return {};
  }
  // throw new Error('Invalid Form');
  // Bei Fehlern können wir den state nutzen, um
  // die ursprüngliche Nutzereingabe zu erhalten
  // und Fehlermeldungen anzuzeigen.
  return {
    errors: validationErrors,
    input: data,
  };
}

export default function App() {
  // Hook verbinded Action-Funktion und Komponenten-State
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <main className="min-h-screen bg-gray-900 p-8 font-sans">
      <div className="max-w-xl mx-auto bg-gray-950 p-6 rounded-lg shadow space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-200">
          Contact Us
        </h2>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
        {/* Vom Hook vermittelte formAction */}
        <form action={formAction} className="space-y-4">
          <div>
            <label
              className="block text-sm font-medium text-gray-200"
              htmlFor="name"
            >
              Name
            </label>
            <input
              // evt. State-Daten als überschreibarer defaultValue
              defaultValue={state.input?.name}
              name="name"
              id="name"
              // Input kann über isPending abgeschaltet werden
              disabled={isPending}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Leia Organa"
            />
            {/* Anzeige etwaiger Fehlermeldungen aus State */}
            {state.errors?.name && (
              <p className="text-sm text-red-600 mt-1">{state.errors.name}</p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              defaultValue={state.input?.email}
              name="email"
              id="email"
              disabled={isPending}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="leia@rebellion.org"
            />
            {state.errors?.email && (
              <p className="text-sm text-red-600 mt-1">{state.errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              defaultValue={state.input?.message}
              name="message"
              id="message"
              rows={4}
              disabled={isPending}
              className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
              placeholder="Tell us how we can help..."
            />
            {state.errors?.message && (
              <p className="text-sm text-red-600 mt-1">
                {state.errors.message}
              </p>
            )}
          </div>
          <SubmitBtn />
        </form>
        {/* </ErrorBoundary> */}
      </div>
    </main>
  );
}
