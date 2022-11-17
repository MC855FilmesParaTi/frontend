import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "services/filmesPraTi";

import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!!localStorage.getItem("userToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const loginResponse = await login(email, password);
    localStorage.setItem("userToken", loginResponse.tokens.access);
    navigate("/");
  };
  return (
    <div className={styles.LoginPage}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input
            id="emailInput"
            type="text"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passwordInput">Password:</label>
          <input
            id="passwordInput"
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <input type="submit" className={styles.SubmitButton} />
      </form>
    </div>
  );
};

export default LoginPage;
