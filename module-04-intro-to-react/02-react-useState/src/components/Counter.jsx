import { useState } from "react";

// {
//    darkTheme: false,
//    text: "hello"
//  }

const Counter = ({ darkTheme }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = (op) => {
    // console.log(e.target.value);
    // const operation = e.target.value;

    if (op === "+") {
      setCounter((prev) => prev + 1);
    } else if (op === "-") {
      if (counter <= 0) return;
      setCounter((prev) => prev - 1);
    }
  };

  const textColor = darkTheme ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`border-2 ${darkTheme ? "border-gray-100" : "border-black"} flex w-36 justify-between`}
      >
        <button
          className={
            "w-12 cursor-pointer bg-green-400 p-4 font-bold " + textColor
          }
          onClick={() => handleClick("+")}
          value="+"
        >
          +
        </button>
        <span className={`${textColor} p-4`}>{counter}</span>
        <button
          className={`w-12 p-4 font-bold ${
            counter === 0 ? "bg-gray-400" : "cursor-pointer bg-red-400"
          } ${textColor}`}
          onClick={() => handleClick("-")}
          value="-"
          disabled={counter === 0 ? true : false}
          //   disabled={counter <= 0}
        >
          -
        </button>
      </div>
      <button
        className={"mt-1 cursor-pointer bg-gray-700 p-2 " + textColor}
        onClick={() => {
          setCounter(0);
        }}
      >
        Clear
      </button>
    </>
  );
};
export default Counter;
