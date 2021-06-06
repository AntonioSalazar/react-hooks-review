import React, { useState } from "react";
import "../02-useEffect/simpleForm.css";
import MultipleCustomHooks from "../03-Examples-CustomHooks/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const tooggleHide = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-5" onClick={tooggleHide}>
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
