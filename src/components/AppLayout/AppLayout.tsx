import React from "react";
import logo from "assets/Logo.png";
import profile from "assets/Profile.svg";
import styles from "./AppLayout.module.scss";
import { Link } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <Link to="/" className={styles.Logo}>
          <img src={logo} alt="Logo do FilmesPraTi" />
        </Link>
        <div className={styles.MenuButton}>Menu</div>
        <div className={styles.SearchBar}>
          <input type="text" />
        </div>
        <img className={styles.Profile} src={profile}></img>
      </header>
      <main className={styles.Main}>{children} </main>
    </div>
  );
};

export default AppLayout;
