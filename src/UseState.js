import React, { useState } from "react";

// function countInitial() {
//   console.log("run function");
//   return 4;
// }

const UseState = () => {
  //   const [count, setCount] = useState(() => countInitial());
  //   const [state, setState] = useState({ count: 4, theme: "blue" });
  //   const count = state.count;
  //   const theme = state.theme;
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("red");
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("green");
  };

  //   const decrementCount = () => {
  //     setState((prevState) => {
  //       return { ...prevState, count: prevState.count - 1 };
  //     });
  //   };
  //   const incrementCount = () => {
  //     setState((prevState) => {
  //       return { ...prevState, count: prevState.count + 1 };
  //     });
  //   };

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default UseState;
