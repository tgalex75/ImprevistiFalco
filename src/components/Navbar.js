import React from "react";
import ThemeToggle from "./ThemeToggle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MdMenu, MdClose } from "react-icons/md";
import "./Navbar.css";
import logo from "../assets/logo192.png";

function Navbar(props) {
    const { theme, cambiaTema } = props;

    const buttonMenu = () => {
        console.log("menu cliccato");
    };

    return (
        <nav>
            {/* Logo */}
            <div className="logo">
                <a href="/">
                    {" "}
                    <img src={logo} />{" "}
                </a>
            </div>
            <ThemeToggle theme={theme} cambiaTema={cambiaTema} />
            {/* Menu */}
            <div className="menu">
                <MdMenu size={"2rem"} onClick={buttonMenu} />
            </div>
        </nav>
    );
}

export default Navbar;
