// HommePage
import React from "react";
import logo from "../assets/Logo.png";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <spam>Menu</spam>
      <SearchBox />
      <a
        className="App-link"
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
