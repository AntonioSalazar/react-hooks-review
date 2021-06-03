import React, { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);
  return (
    <div>
      <h3>Eres cool</h3>
    </div>
  );
};

export default Message;
