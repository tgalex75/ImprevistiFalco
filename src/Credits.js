import React from 'react'

export default function Credits(props) {
    return (
        <footer className="footer">
            <p className={props.mainState !== "welcome" ? 'black' : ''}>Coded by <span>tgalex75</span></p>
            <p className={props.mainState !== "welcome" ? 'black' : ''}><span>Falconero</span> Community</p>
        </footer>
    )
}