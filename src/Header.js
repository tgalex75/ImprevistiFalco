import React, { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaAngleDoubleDown
} from "react-icons/fa";
import "./HeaderStyle.css";
import logo from "./assets/logo192.png";

export default function Header(props) {
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => setOpenMenu((prevMenu) => !prevMenu);

    return (
        <header className={props.darkMode ? "dark": ""}>
            <>
                <a href="/">
                    <img className="img--logo" src={logo} alt="logo" />
                </a>
                {props.mainState === "welcome" && (
                    <div className="title">
                        <h2>Scegli un imprevisto</h2>
                        <FaAngleDoubleDown
                            size={25}
                            className="FaAngleDoubleDown"
                        />
                    </div>
                )}
            
                <div className="hamburger" onClick={handleClick}>
                    <ul className={openMenu ? "nav-menu" : "nav-menu active"}>
                        <li onClick={props.selectMainPrepartita}>PREPARTITA</li>
                        <li onClick={props.selectMainSettimana}>
                            Peggiore della SETTIMANA
                        </li>
                    </ul>
                    {openMenu ? (
                        <FaBars size={25} style={props.darkMode || props.mainState === "welcome" ? {color: "#fff"} : {color: "#000"}} />
                    ) : (
                        <FaTimes size={25} style={{color: "white"}} />
                    )}
                </div>
            </>
        </header>
    );
}
