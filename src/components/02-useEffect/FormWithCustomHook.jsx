import React, { useEffect } from "react";
import "./simpleForm.css";
import useForm from "../../hooks/useForm";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange, handleFormSubmit] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;
  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  return (
    <>
      <h1>useEffect Hook</h1>
      <hr />
      <div className="form-group">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            autoComplete="off"
            placeholder="name"
            onChange={handleInputChange}
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            placeholder="email"
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            placeholder="password"
            onChange={handleInputChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  );
};

export default FormWithCustomHook;
