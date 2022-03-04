import React from 'react'

export default function Header(props) {
    return (
        <header className='header'>
            <div id='menu-prepartita' className={props.mainState === "prepartita" ? "default" : ""} onClick={props.selectMainPrepartita}>IMPREVISTI<br/><span>PREPARTITA</span></div>
            <div id='menu-settimana' className={props.mainState === "settimana" ? "default" : ""} onClick={props.selectMainSettimana}>IMPREVISTI<br/><span>SETTIMANA</span></div>
        </header>
    )
}