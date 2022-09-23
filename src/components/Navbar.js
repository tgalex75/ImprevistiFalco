import { React, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { MdMenu, MdClose } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import "./NavbarStyle.css";
import logo from "../assets/logo192.png";

function Navbar(props) {
    const { theme, cambiaTema } = props;

    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu((prevMenu) => !prevMenu);
    };

    return (
        <nav>
            {/* Logo */}
            <div className="logo">
                <a href="/">
                    {" "}
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <ThemeToggle theme={theme} cambiaTema={cambiaTema} />
            {/* Menu */}
            <Tooltip title="Menu generale" placement= "left" arrow>
                <div className="menu" onClick={handleClick}>
                    {!openMenu ? <MdMenu /> : <MdClose />}
                </div>
            </Tooltip>
        </nav>
    );
}

export default Navbar;
