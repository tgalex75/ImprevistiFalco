import React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function Main(props) {
    const [inputField, setInputField] = React.useState({
        randomPlayerNumber: "",
    });

    function handleChange(event) {
        setInputField((prevInputField) => {
            return {
                ...prevInputField,
                [event.target.name]: event.target.value,
            };
        });
    }

    const [extractedNumber, setExtractedNumber] = React.useState(null);

    function chooseRandomPlayer() {
        setExtractedNumber(
            Math.floor(Math.random() * inputField.randomPlayerNumber) + 1
        );
    }
    const randNumFixedIndex = props.randomNumber && props.randomNumber - 1;
    const title = props.imprev[randNumFixedIndex].title;
    const description = props.imprev[randNumFixedIndex].description;
    const isImprev = props.imprev[randNumFixedIndex].isImprev;
    const ultEstrazione = props.imprev[randNumFixedIndex].ultEstrazione;
    return (
        <main
            className={props.mainState === "welcome" ? "main welcome" : "main"}
        >
            {/* WELCOME SCREEN */}
            {props.mainState === "welcome" && (
                <div className="overlay">
                    <h1 className="welcome-title">
                        Benvenuto!
                        <br />
                        Scegli il tipo di imprevisto dal menu in alto
                    </h1>
                </div>
            )}
            {/* IMPREVISTI PREPARTITA */}
            {props.mainState === "prepartita" && (
                <div className="displayPrepartita">
                    <button
                        type="button"
                        className="btn-randNum"
                        onClick={props.randNumBox}
                    >
                        ESTRAI
                    </button>
                    <h2 style={props.randomNumber ? {visibility:"visible"} : {visibility:"hidden"}}
                        className={isImprev ? "red-alert" : ""}
                        id="randomNumber"
                    >
                        {props.randomNumber}
                    </h2>
                    {ultEstrazione && <div className="img-impr"></div>}
                    <h3 style={props.randomNumber ? {visibility:"visible"} : {visibility:"hidden"}} className={isImprev ? "red-alert" : ""}>{title}</h3>
                    <p style={props.randomNumber ? {visibility:"visible"} : {visibility:"hidden"}}>{description}</p>
                    {ultEstrazione && (
                        <div className="ultEstrazione">
                            <div className="container">
                                <Tooltip
                                    title="Inserisci un numero per estrarre il giocatore colpito dall'imprevisto"
                                    followCursor
                                >
                                    <input
                                        type="number"
                                        name="randomPlayerNumber"
                                        value={inputField.randomPlayerNumber}
                                        onChange={handleChange}
                                        min="1"
                                        max="35"
                                    />
                                </Tooltip>
                                <button
                                    type="button"
                                    className="btn-player"
                                    onClick={chooseRandomPlayer}
                                >
                                    ESTRAI
                                </button>
                            </div>
                            <div className="randomPlayer">
                                {extractedNumber}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* IMPREVISTI PEGGIORE DELLA SETTIMANA */}

            {props.mainState === "settimana" && (
                <div className="displayPrepartita">
                    <div className="btn-randNum" onClick={props.randNumBox}>
                        ESTRAI
                    </div>
                    <h2 style={props.randomNumber ? {visibility:"visible"} : {visibility:"hidden"}}
                        className={
                            props.imprevSettim[randNumFixedIndex].isImprev
                                ? "red-alert"
                                : ""
                        }
                        id="randomNumber"
                    >
                        {props.randomNumber}
                    </h2>
                    <h3 style={props.randomNumber ? {visibility:"visible"} : {visibility:"hidden"}}
                        className={
                            props.imprevSettim[randNumFixedIndex].isImprev
                                ? "red-alert"
                                : ""
                        }
                    >
                        {props.imprevSettim[randNumFixedIndex].title}
                    </h3>
                    <p style={props.randomNumber ? {visibility:"visible"} : {visibility:"hidden"}}>{props.imprevSettim[randNumFixedIndex].description}</p>
                </div>
            )}
        </main>
    );
}
