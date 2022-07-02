import { useState } from "react";

import React from "react";
import { createUser } from "../../services/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input";

// CSS
import "./Suscribe.css";

export default function Suscribe() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const cleanForm = () => {
    setUser("");
    setPassword("");
  };

  const isEmpty = (value) => !value;

  const onSuscribe = async (e) => {
    e.preventDefault();
    if (isEmpty(user) || isEmpty(password)) {
      toast.error("Llena el form!!!!");
      return;
    }

    const data = {
      user,
      password,
    };
    try {
      await createUser(data);
      toast.success("Todo fine!!");
      cleanForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="container">
        <form className="form_login">
          <div>
            <h1 className="titleLogin">Suscribete</h1>
            <div>Username</div>
            <Input
              className="form-control-user"
              name="user"
              type="email"
              placeholder="Usuario"
              id="floatingTextareaTitle"
              value={user}
              callback={(e) => setUser(e.target.value)}
            />
          </div>
          <div>
            <div>Password</div>
            <Input
              className="form-control-password"
              name="password"
              type="password"
              placeholder="Password"
              id="floatingTextareaTitle"
              value={password}
              callback={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            onClick={onSuscribe}
            className="button-login"
            value="Login"
          >
            Suscribete
          </button>
          <button type="button" className="button-back" value="Login">
            Regresar
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
