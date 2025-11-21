// import { useState } from "react";

//   const props = { stegosaurus: 0, setter: setCount() };
const Counter = ({ stegosaurus, setter }) => {
  //   const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setter((prev) => prev - 1)}>-</button>
      <p>{stegosaurus}</p>
      <button onClick={() => setter((prev) => prev + 1)}>+</button>
    </div>
  );
};
export default Counter;
