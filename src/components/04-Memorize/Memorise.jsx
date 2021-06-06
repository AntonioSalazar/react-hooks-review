import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";
import "../02-useEffect/simpleForm.css";
import Small from "./Small";

const Memorize = () => {
  const { number, increment } = useCounter(10);
  const [show, setshow] = useState(true);

  return (
    <div>
      <h1>
        Counter: <Small value={number} />
      </h1>
      <hr />

      <button className="btn btn-primary " onClick={increment}>
        +1
      </button>
      <br />
      <button className="btn btn-success mt-3" onClick={() => setshow(!show)}>
        True/false: {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
