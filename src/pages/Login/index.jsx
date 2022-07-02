import { useState, useEffect } from "react";

import React from "react";
import { listUsers } from "../../services/users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

// CSS
import "./Login.css";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listUsers();
      const parsedUsers = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setUser(parsedUsers);
    };

    list();
  }, []);

  const loginUsers = (user, index) => (
    <div key={index}>
      <p>
        {user.user} {user.password}
      </p>

      <button onClick={() => navigate(user.id)}>Detalle</button>
    </div>
  );

  return (
    <div>
      <div className="container">
        <form className="form_login">
          <div>
            <h1 className="titleLogin">Login</h1>
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
            onClick={loginUsers}
            className="button-login"
            value="Login"
          >
            Suscribete
          </button>
          <button type="button" className="button-back" value="Login">
            Regresar
          </button>
        </form>
        <div>
          <h2>List</h2>
          {user.map(loginUsers)}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
