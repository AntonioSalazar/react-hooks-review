import React from "react";
import "./CounterWithCustomHook.styles.css";
import useCounter from "../../hooks/useCounter";
const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />
      <button onClick={increment} className="btn ">
        + 1
      </button>
      <button onClick={decrement} className="btn ">
        -1{" "}
      </button>
      <button onClick={reset} className="btn">
        Reset
      </button>
    </>
  );
};

export default CounterWithCustomHook;
