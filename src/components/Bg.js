import React from "react";
import "./BgStyle.css"
import bgSvg from "../assets/big-logo.svg"


const Bg = () => {
    return (
        <div className="svg-container" style={{ backgroundImage: `url(${bgSvg})` }}>
            
        </div>
    );
};

export default Bg;
