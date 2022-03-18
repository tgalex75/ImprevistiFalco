import React from 'react';
import { FaMoon, FaSun } from "react-icons/fa";
import './togglerStyle.css'

export default function Toggler(props) {
    return (
        <div className="toggler">
                <FaSun
                    style={
                        props.darkMode
                            ? { color: "#555" }
                            : { color: "#000" }
                    }
                />
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <FaMoon
                    style={
                        props.darkMode
                            ? { color: "#fff" }
                            : { color: "#555" }
                    }
                />
            </div>
    )
}