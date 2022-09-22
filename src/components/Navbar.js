import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdMenu, MdClose } from "react-icons/md";
import "./Navbar.css";
import logo from "../assets/logo192.png";

function Navbar() {

    const buttonMenu = () => {
      console.log("menu cliccato");
    }

  return (
    <nav>
        {/* Logo */}
      <div className="logo">
        <a href="/">
          {" "}
          <img src={logo} />{" "}
        </a>
      </div>
      {/* Menu */}
      <div className="menu">
        <MdMenu size={"3rem"} onClick={buttonMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
