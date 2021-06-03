import React, { useState } from "react";
import "./Counter.css";
const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = state;
  const addCounter = () => {
    setState({
      ...state,
      counter1: counter1 + 1,
    });
  };
  return (
    <>
      <hr />
      <h2>Counter 1: {counter1}</h2>
      <h2>Counter 2: {counter2}</h2>
      <button className="btn btn-primary" onClick={addCounter}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
