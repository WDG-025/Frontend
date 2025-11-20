import { useState } from "react";

const Counter = ({ darkTheme }) => {
  //  { darkTheme: false}
  const [counter, setCounter] = useState(0);

  const handleClick = (e) => {
    // console.log(e.target.value);
    const operation = e.target.value;
    if (operation === "+") {
      setCounter((prev) => prev + 1);
    } else if (operation === "-") {
      if (counter <= 0) return;
      setCounter((prev) => prev - 1);
    }
  };

  //   const increaseCounter = () => {
  //     setCounter((prev) => prev + 1);
  //   };
  //   const decreaseCounter = () => {
  //     setCounter((prev) => prev - 1);
  //   };

  const textToggle = darkTheme ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`flex w-36 justify-between border-2 ${darkTheme ? "border-gray-100" : "border-black"}`}
      >
        <button
          value="+"
          onClick={handleClick}
          className={
            "w-12 cursor-pointer bg-green-400 p-4 font-bold " + textToggle
          }
        >
          +
        </button>
        <span className={`p-4 ${textToggle}`}>{counter}</span>
        <button
          disabled={counter === 0 ? true : false}
          value="-"
          onClick={handleClick}
          className={`w-12 p-4 font-bold ${counter === 0 ? "bg-gray-400" : " cursor-pointer bg-red-400"} ${textToggle}`}
        >
          -
        </button>
      </div>
      <button
        onClick={() => {
          setCounter(0);
        }}
        className="mt-1 cursor-pointer bg-gray-300 p-1"
      >
        Reset
      </button>
    </>
  );
};
export default Counter;

// # Direct Value Update - zum Ueberschreiben des alten Wertens - wenn alter Wert nicht relevant ist
// setCounter(1); // 0 + 1  -> In Planung fuer re-render: 1
// # Functional Update - wenn alter Wert relevant ist
// setCounter((previousValue) => previousValue + 1);
// setCounter((previousValue) => {
//   const sum = previousValue + 1;
//   console.log(sum);
//   return sum;
// });
