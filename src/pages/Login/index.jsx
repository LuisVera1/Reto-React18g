import { useState } from "react";

import React from "react";
import { createUser } from "../../../src/services/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../../src/components/Input";

// CSS
import "./Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const cleanForm = () => {
    setUser("");
    setPassword("");
  };

  const isEmpty = (value) => !value;

  const onLogin = async (e) => {
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
            <h1 className="titleLogin">LOGIN</h1>
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
              placeholder="Password"
              id="floatingTextareaTitle"
              value={password}
              callback={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button
            type="submit"
            onClick={onLogin}
            className="button-login"
            value="Login"
          >
            Suscribete
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}
