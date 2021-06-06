import React, { useState, useMemo } from "react";
import useCounter from "../../hooks/useCounter";
import "../02-useEffect/simpleForm.css";
import procesoPesado from '../helpers/procesoPesado'

const MemoHook = () => {
  const { number, increment } = useCounter(5000);
  const [show, setshow] = useState(true);


  const memProcesoPesado = useMemo(() => procesoPesado(number), [number])

  return (
    <div>
        <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{number}</small>
      </h3>
      <hr />
        <p>
            {
                memProcesoPesado
            }
        </p>
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

export default MemoHook;
