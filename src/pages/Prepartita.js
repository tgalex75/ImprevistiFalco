import { React, useState } from "react";
import "./PrepartitaStyle.css";
import prepartita from "../data/dati_prepartita";
import SendButton from "../components/SendButton";

const Prepartita = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    function getRandomNumber() {
        setRandomNumber(Math.floor(Math.random() * prepartita.length) + 1);
    }

   const [{ id, title, description, isImprev, ultEstrazione }] = getFilteredNumber()

    const getFilteredNumber = () => {
        return prepartita
            .map((el) => el)
            .filter((data) => data.id === randomNumber);
    };


    return (
        <>
            {!randomNumber ? (
                <div className="button" onClick={getRandomNumber}>
                    <SendButton />
                </div>
            ) : (
                <div className="prepartita">
                    <h1>{id}</h1>
                    <h2 style={isImprev ? { color: "red" } : {}}> {title} </h2>
                    <p> {description} </p>
                    <small> {isImprev ? "IMPREVISTO" : ""} </small>
                    {/* IN CASO DI ULTERIORE ESTRAZIONE */}
                    <p> {ultEstrazione ? "Altra Estrazione" : ""} </p>
                </div>
            )}
        </>
    );
};

export default Prepartita;
