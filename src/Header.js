import React from 'react'

export default function Header(props) {
    return (
        <header className='header'>
            <div id='menu-prepartita' onClick={props.selectMainPrepartita}>IMPREVISTI<br/><span>PREPARTITA</span></div>
            <div id='menu-settimana' onClick={props.selectMainSettimana}>IMPREVISTI<br/><span>SETTIMANA</span></div>
        </header>
    )
}