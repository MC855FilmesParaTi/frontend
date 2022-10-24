import React from "react";
import logo from "assets/Logo.png";
import styles from "./HomePage.module.scss";
import AppLayout from "components/AppLayout";

interface HomePageProperties {}

const HomePage = ({}: HomePageProperties) => {
  return (
    <AppLayout>
      <div id="grad1" className={styles.App}>
        <header className={styles["App-header"]}>
          <img src={logo} className={styles["App-logo"]} alt="logo" />
          <p>HomePage</p>
          <a
            className={styles["App-link"]}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AppLayout>
  );
};

export default HomePage;
