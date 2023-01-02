import React from "react";
import NavBar from "../NavBar/Navbar";
//import { Link } from "react-router-dom";
import logo from "../../assets/devto-icon.svg";
import "./Header.css";

const Header = () => {
  return (
    <header id="Home" className="header center">
      <img src={logo} alt="img" />

      <NavBar />
    </header>
  );
};

export default Header;
