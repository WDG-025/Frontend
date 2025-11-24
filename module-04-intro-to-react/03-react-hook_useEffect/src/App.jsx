import { useState } from "react";
import Effect from "./components/Effect.jsx";
import FetchInEffect from "./components/FetchInEffect.jsx";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <input type="checkbox" checked={toggle} onChange={(e) => setToggle((t) => !t)} />

      {toggle && <Effect />}

      <FetchInEffect />
    </div>
  );
}

export default App;
