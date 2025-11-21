import { useState } from "react";

import Counter from "./components/Counter";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  return (
    <>
      <h1>React Hook: useState</h1>
      <div style={{ display: "flex" }}>
        <Counter stegosaurus={count1} setter={setCount1} />
        <Counter stegosaurus={count2} setter={setCount2} />
        <Counter stegosaurus={count3} setter={setCount3} />

        {/* {stegosaurus: 0, setter : setCount()}  */}
      </div>
    </>
  );
}

export default App;
