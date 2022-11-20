import React, { useState } from "react";
import logo from "assets/Logo.png";
import profile from "assets/Profile.svg";
import styles from "./AppLayout.module.scss";
import { useNavigate, Link, useSearchParams } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  function logOut() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  const doSearch = (searchText: string) => {
    navigate(`/search?${new URLSearchParams([["q", searchText]]).toString()}`);
  };

  const [searchText, setSearchText] = useState<string>(
    searchParams.get("q") ?? ""
  );

  return (
    <div className={styles.Container}>
      <header className={styles.Header}>
        <Link to="/" className={styles.Logo}>
          <img src={logo} alt="Logo do FilmesPraTi" />
        </Link>
        <div className={styles.MenuButton}>Menu</div>
        <div className={styles.SearchBar}>
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              doSearch(searchText);
            }}
          >
            <input
              type="text"
              value={searchText}
              onChange={(ev) => setSearchText(ev.target.value)}
            />
          </form>
        </div>
        <img className={styles.Profile} src={profile} alt=""></img>
        <button className={styles.LogOutButton} type="button" onClick={logOut}>
          Log Out
        </button>
      </header>
      <main className={styles.Main}>{children} </main>
    </div>
  );
};

export default AppLayout;
