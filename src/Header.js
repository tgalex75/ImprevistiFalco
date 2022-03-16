import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HeaderStyle.css";
import logo from "./assets/logo192.png";

export default function Header(props) {
    
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => setOpenMenu((prevMenu) => !prevMenu);

    return (
        <header className="header">
            <>
                <img className="img--logo" src={logo} alt="logo" />
                <div className="hamburger" onClick={handleClick}>
                    <ul className={openMenu ? "nav-menu" : "nav-menu active"}>
                        <li onClick={props.selectMainPrepartita}>PREPARTITA</li>
                        <li onClick={props.selectMainSettimana}>Peggiore della SETTIMANA</li>
                    </ul>
                    {openMenu ? (
                        <FaBars size={25} style={{ color: "white" }} />
                    ) : (
                        <FaTimes size={25} style={{ color: "white" }} />
                    )}
                </div>
            </>
        </header>
    );
}
