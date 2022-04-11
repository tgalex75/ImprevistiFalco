import React from "react";
import Rules from "./Rules";
import clipVideo from './assets/clip.mp4'
import fallbackImg from './assets/pitch.jpg'

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
            className={props.mainState === "welcome" ? "welcome" : ""}
        >
            {/* **************
            * WELCOME SCREEN *
            ************** */}
            
            {props.mainState === "welcome" && (
                <>
                    <video autoPlay loop muted id="video" poster={fallbackImg}>
                        <source src={clipVideo} type="video/mp4" />
                    </video>
                    <div className="overlay"></div>
                </>
            )}

            {/* *********************
             * IMPREVISTI PREPARTITA *
             ********************* */}

            {props.mainState === "prepartita" && (
                <div className="displayPrepartita">
                    {/* MAIN BUTTON */}
                    <div
                        className={
                            props.randomNumber
                                ? "btn-randNum"
                                : "btn-randNum centered"
                        }
                        onClick={props.randNumBox}
                    >
                        ESTRAI
                    </div>
                    {/* RESET BUTTON */}
                    <div
                        className={
                            props.randomNumber
                                ? "btn-randNum btn-reset"
                                : "hidden"
                        }
                        onClick={props.selectMainPrepartita}
                    >
                        RESET
                    </div>
                    <h2
                        style={
                            props.randomNumber
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                        className={`${isImprev ? "red-alert" : ""} ${
                            props.darkMode ? "dark" : ""
                        }`}
                        id="randomNumber"
                    >
                        {props.randomNumber}
                    </h2>

                    {isImprev && (
                        <div
                            className={`img-impr ${
                                props.darkMode ? "red-alert dark" : ""
                            }`}
                        >
                            IMPREVISTO
                        </div>
                    )}

                    <h3
                        style={
                            props.randomNumber
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                        className={`${isImprev ? "red-alert" : ""} ${
                            props.darkMode ? "dark" : ""
                        }`}
                    >
                        {title}
                    </h3>
                    <p
                        style={
                            props.randomNumber
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                    >
                        {description}
                    </p>
                    {ultEstrazione && (
                        <div className="ultEstrazione">
                            <div className="container">
                                <div className="tooltip">
                                    <input
                                        id="randomPlayerNumber"
                                        type="number"
                                        name="randomPlayerNumber"
                                        value={inputField.randomPlayerNumber}
                                        onChange={handleChange}
                                        min="1"
                                        max="35"
                                        placeholder="11"
                                    />
                                    {!inputField.randomPlayerNumber && (
                                        <div className="left">
                                            <p>
                                                <strong>
                                                    Inserisci un numero
                                                </strong>{" "}
                                                per scegliere tra quanti giocatori della rosa, sarà estratto quello
                                                colpito da imprevisto (es. 11, 18, etc.)
                                            </p>
                                            <i></i>
                                        </div>
                                    )}
                                </div>
                                <div
                                    className="btn-player"
                                    onClick={chooseRandomPlayer}
                                >
                                    ESTRAI
                                </div>
                            </div>
                            <div className="randomPlayer">
                                {extractedNumber}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* ***********************************
             * IMPREVISTI PEGGIORE DELLA SETTIMANA *
             *********************************** */}

            {props.mainState === "settimana" && (
                <div className="displayPrepartita">
                    <div
                        className={
                            props.randomNumber
                                ? "btn-randNum"
                                : "btn-randNum centered"
                        }
                        onClick={props.randNumBox}
                    >
                        ESTRAI
                    </div>
                    <h2
                        style={
                            props.randomNumber
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                        className={
                            props.imprevSettim[randNumFixedIndex].isImprev
                                ? "red-alert"
                                : ""
                        }
                        id="randomNumber"
                    >
                        {props.randomNumber}
                    </h2>

                    {props.imprevSettim[randNumFixedIndex].isImprev && (
                        <div className="img-impr">IMPREVISTO</div>
                    )}

                    <h3
                        style={
                            props.randomNumber
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                        className={
                            props.imprevSettim[randNumFixedIndex].isImprev
                                ? "red-alert"
                                : ""
                        }
                    >
                        {props.imprevSettim[randNumFixedIndex].title}
                    </h3>
                    <p
                        style={
                            props.randomNumber
                                ? { visibility: "visible" }
                                : { visibility: "hidden" }
                        }
                    >
                        {props.imprevSettim[randNumFixedIndex].description}
                    </p>
                </div>
            )}
            {/* ***********************************
             * IMPREVISTI PEGGIORE DELLA SETTIMANA *
             *********************************** */}
            {props.mainState === "rules" && (
                <Rules
                    imprev={props.imprev}
                    imprevSettim={props.imprevSettim}
                    mainState={props.mainState}
                />
            )}
        </main>
    );
}
