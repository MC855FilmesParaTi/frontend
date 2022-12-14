import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "services/filmesPraTi";
import logo from "assets/Logo.png";

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
    if (!password || !email) {
      alert("Please make sure all fields are filled in correctly.");
      return;
    }
    const loginResponse = await login(email, password);
    localStorage.setItem("userToken", loginResponse.tokens.access);
    navigate("/");
  };
  return (
    <div className={styles.LoginPage}>
      <form onSubmit={handleSubmit}>
        <img className={styles.Logo} src={logo} alt="Logo do FilmesPraTi"></img>
        <div>
          {/* <label htmlFor="emailInput">Email:</label> */}
          <input
            id="emailInput"
            className={styles.FormField}
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="passwordInput">Password:</label> */}
          <input
            id="passwordInput"
            className={styles.FormField}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <button className={styles.SubmitButton} type="submit">
          Sign In
        </button>
        <Link to="/signup">
          <button className={styles.SignUpButton} type="submit">
            New here? Create an account!
          </button>
        </Link>

        {/* <input type="submit" className={styles.SubmitButton} /> */}
      </form>
    </div>
  );
};

export default LoginPage;
