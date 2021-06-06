import { useState } from "react";
const useCounter = (initial_state = 1) => {
  const [number, setNumber] = useState(initial_state);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  const reset = () => {
    setNumber(initial_state);
  };

  return {
    number,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
