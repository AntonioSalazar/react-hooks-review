import { useState } from "react";
const useCounter = (initial_state = 10) => {
  const [state, setstate] = useState(initial_state);

  const increment = () => {
    setstate(state + 1);
  };

  const decrement = () => {
    setstate(state - 1);
  };

  const reset = () => {
    setstate(initial_state);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
