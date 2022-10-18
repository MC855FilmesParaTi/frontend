import React from "react";
import logo from "../../assets/Logo.png";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["App-header"]}>
      <img src={logo} className={styles["App-logo"]} alt="logo" />
      <spam>Menu</spam>
      <button type="submit">search</button>
      <input type="text" placeholder="search a film..."></input>
      <a
        className={styles["App-link"]}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        sign in
      </a>
    </div>
  );
};

export default Header;
