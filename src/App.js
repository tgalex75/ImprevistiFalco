import React from "react";
import Header from "./Header";
import imprev from "./imprev";
import Main from "./Main";

export default function App() {

    /* Header Menu State */
    const [mainState, setMainState] = React.useState("prepartita");

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

    const [randomNumber, setRandomNumber] = React.useState(getRandomNumber)

    function randNumBox() {
        setRandomNumber(getRandomNumber)
    }  

    return (
        <>
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
            />
        </>
    );
}
