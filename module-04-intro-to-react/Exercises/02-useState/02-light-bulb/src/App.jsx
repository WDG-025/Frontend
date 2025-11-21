import { useState } from "react";
import LightBulb from "./components/LightBulb";

function App() {
  const [lightOn, setLightOn] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter < 10) {
      // setLightOn((lightOn) => (lightOn === false ? true : false));
      setLightOn((l) => !l);
    }

    if (lightOn) {
      setCounter((c) => c + 1);
    }
    // setCounter((c) => (lightOn ? c + 1 : c));
  };
  // console.log(lightOn);
  // console.log(counter);

  const handleReset = () => {
    setCounter(0);
    setLightOn(false);
  };

  return (
    <>
      <button onClick={handleClick} disabled={counter >= 10}>
        {lightOn ? "Switch off" : "Switch on"}
      </button>
      <button onClick={handleReset}>Reset</button>
      <LightBulb lightOn={lightOn} />
    </>
  );
}

export default App;
