import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signUp } from "services/filmesPraTi";
import logo from "assets/Logo.png";

import styles from "./SignUpPage.module.scss";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [profileName, setProfileName] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!!localStorage.getItem("userToken")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    if (!password || !passwordConf || !email || !profileName) {
      alert("Please make sure all fields are filled in correctly.");
      return;
    }
    if (password !== passwordConf) {
      alert("Passwords does not match");
      setPassword("");
      setPasswordConf("");
    } else {
      await signUp(email, profileName, password);

      navigate("/login");
    }
    return;
  };
  return (
    <div className={styles.SignUpPage}>
      <form onSubmit={handleSubmit}>
        <img className={styles.Logo} src={logo} alt="Logo do FilmesPraTi"></img>
        <div className={styles.PageTitle}>Create Account</div>
        <div>
          {/* <label htmlFor="emailInput">Email:</label> */}
          <input
            id="profileNameInput"
            className={styles.FormField}
            type="text"
            placeholder="Profile Name"
            value={profileName}
            onChange={(ev) => setProfileName(ev.target.value)}
          />
        </div>
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
        <div>
          {/* <label htmlFor="passwordInput">Password:</label> */}
          <input
            id="passwordConfInput"
            className={styles.FormField}
            type="password"
            placeholder="Confirm Password"
            value={passwordConf}
            onChange={(ev) => setPasswordConf(ev.target.value)}
          />
        </div>
        <button className={styles.SubmitButton} type="submit">
          Sign Up
        </button>
        <Link to="/login">
          <button className={styles.SignUpButton} type="submit">
            Already have an account? Log in!
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
