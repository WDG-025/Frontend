import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// * Einstiegspunkt der React-App
// # createRoot verbindet React mit dem DOM-Element mit der id "root"
createRoot(document.getElementById("root")).render(
  // ! StrictMode hilft, potenzielle Probleme in der Entwicklung früh zu erkennen (nur in Dev wichtig)
  <StrictMode>
    <App />
  </StrictMode>
);
