import { useState } from "react";

import Counter from "./Counter";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };
  return (
    <main
      className={`min-h-screen ${darkTheme ? "bg-slate-800" : " bg-white"}`}
    >
      <label className={darkTheme ? "text-white" : "text-black"}>
        <input type="checkbox" onChange={toggleTheme} />
        Dark mode
      </label>
      <Counter darkTheme={darkTheme} />
      <Counter darkTheme={darkTheme} />
    </main>
  );
}

export default App;
