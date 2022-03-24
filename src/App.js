import React from "react";
import Header from "./Header";
import imprev from "./imprev";
import imprevSettim from "./imprevSettim";
import Toggler from "./Toggler";
import Main from "./Main";
import Credits from "./Credits"

export default function App() {

    /* Header Menu State */
    const [mainState, setMainState] = React.useState("welcome");

    function selectMainPrepartita() {
        setRandomNumber(0)
        setMainState("prepartita");
    }

    function selectMainSettimana() {
        setRandomNumber(0)
        setMainState("settimana");
    }

    /* Get random number for Normal 29 elements from "Imprevisti" data */
    function getRandomNumber() {
        return Math.floor(Math.random() * imprev.length) + 1;
    }

    const [randomNumber, setRandomNumber] = React.useState(0)

    function randNumBox() {
        setRandomNumber(getRandomNumber)
    }

    /* Toggle Dark/Light Mode */
    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <div id="main-container" className={darkMode ? "dark": ""}>
            <Header
                selectMainPrepartita={selectMainPrepartita}
                selectMainSettimana={selectMainSettimana}
                mainState={mainState}
                darkMode={darkMode}
            />
            <Toggler 
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
            />
            <Main 
                mainState={mainState}
                randomNumber={randomNumber}
                randNumBox={randNumBox}
                imprev={imprev}
                imprevSettim={imprevSettim}
                darkMode={darkMode}
            />
            <Credits mainState={mainState}/>
        </div>
    );
}
