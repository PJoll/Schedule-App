import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../utils/resource";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      handleLogin(username, password, navigate);
      setPassword("");
      setUsername("");
    }
  };
  return (
    <main className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Login to your account</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />

        <button className="loginButton">LOG IN</button>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Don't have an account?? {""}
          <button className="registerButton">
            <Link className="link" to={"/register"}>
              Register
            </Link>
          </button>
        </p>
      </form>
    </main>
  );
};

export default Login;
