import React, { useEffect, useState } from "react";
import Message from "./Message";
import "./simpleForm.css";

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    console.log("hey");
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email } = form;
  return (
    <>
      <h1>useEffect Hook</h1>
      <hr />
      <div className="form-group">
        <form>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            autoComplete="off"
            placeholder="name"
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="email"
            onChange={handleChange}
          />
          <input type="submit" value="submit" />
        </form>
        {name === "123" ? <Message /> : null}
      </div>
    </>
  );
};

export default SimpleForm;
