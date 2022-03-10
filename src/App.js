import React from "react";
import Header from "./Header";
import imprev from "./imprev";
import imprevSettim from "./imprevSettim";
import Main from "./Main";

export default function App() {

    /* Header Menu State */
    const [mainState, setMainState] = React.useState("welcome");

    function selectMainPrepartita() {
        setMainState("prepartita");
    }

    function selectMainSettimana() {
        setMainState("settimana");
    }

    /* Get random number for Normal 29 elements from "Imprevisti" data */
    function getRandomNumber() {
        return Math.floor(Math.random() * imprev.length) + 1;
    }

    const [randomNumber, setRandomNumber] = React.useState(1)

    function randNumBox() {
        setRandomNumber(getRandomNumber)
    }  

    return (
        <div className="main-container">
            <Header
                selectMainPrepartita={selectMainPrepartita}
                selectMainSettimana={selectMainSettimana}
                mainState={mainState}
            />
            <Main 
                mainState={mainState}
                randomNumber={randomNumber}
                randNumBox={randNumBox}
                imprev={imprev}
                imprevSettim={imprevSettim}
            />
        </div>
    );
}
