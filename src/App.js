import React from "react";
import Header from "./Header";
import imprev from "./imprev";
import Main from "./Main";

export default function App() {

    function getRandomNumber() {
        return Math.floor(Math.random() * imprev.length) + 1;
    }

    const [randomNumber, setRandomNumber] = React.useState(0)

    function randNumBox() {
        setRandomNumber(getRandomNumber)
    }
    
    const [mainState, setMainState] = React.useState("prepartita");

    function selectMainPrepartita() {
        setMainState("prepartita");
    }

    function selectMainSettimana() {
        setMainState("settimana");
    }

    return (
        <>
            <Header
                selectMainPrepartita={selectMainPrepartita}
                selectMainSettimana={selectMainSettimana}
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
