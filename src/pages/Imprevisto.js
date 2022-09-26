import { React, useState } from "react";
import { MdSend } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import "./ImprevistoStyle.css";
import prepartita from "../data/dati_prepartita";
//import SendButton from "../components/SendButton";

const Imprevisto = () => {
    const [randomNumber, setRandomNumber] = useState(1);
    const [isWelcomeScreen, setIsWelcomeScreen] = useState(true);

    function getRandomNumber() {
        return Math.floor(Math.random() * prepartita.length) + 1;
    }

    function genRandomNumber() {
        setRandomNumber(getRandomNumber);
        setIsWelcomeScreen(false);
    }

    function mappedNumber(data) {
        return data[randomNumber - 1];
    }

    const { id, title, description, isImprev, ultEstrazione } =
        mappedNumber(prepartita);

    return (
        <>
            {/* ***** WELCOME SCREEN ***** */}

            {isWelcomeScreen && (
                <Tooltip title="Estrai un numero" placement="bottom" arrow>
                    <div className="welcomeScreenBtn">
                        <MdSend onClick={genRandomNumber} />
                    </div>
                </Tooltip>
            )}

            {/* ***** PREPARTITA ***** */}

            {!isWelcomeScreen && (
                <div>
                    <div className="prepartita">
                        <h1>{id}</h1>
                        <h2 style={isImprev ? { color: "red" } : {}}>
                            {" "}
                            {title}{" "}
                        </h2>
                        <p> {description} </p>
                        <small> {isImprev ? "IMPREVISTO" : ""} </small>

                        {/* IN CASO DI ULTERIORE ESTRAZIONE */}

                        {ultEstrazione && <div className="estrazione-extra">
                            <p>Altra Estrazione</p>
                            
                        </div>}
                    </div>

                    {/* ***** Pulsante estrazione ***** */}

                    <Tooltip title="Estrai un numero" placement="top" arrow>
                        <div className="sendButton" onClick={genRandomNumber}>
                            <MdSend />
                        </div>
                    </Tooltip>
                </div>
            )}
        </>
    );
};

export default Imprevisto;
