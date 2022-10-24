import React from "react";
import logo from "assets/Logo.png";
import profile from "assets/Profile.svg";
import styles from "./AppLayout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <img className={styles.Logo} src={logo} alt="Logo do FilmesPraTi" />
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
