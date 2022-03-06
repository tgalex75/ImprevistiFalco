import React from "react";

export default function Main(props) {
    
    const [inputField, setInputField] = React.useState({randomPlayerNumber: ""})

    function handleChange(event) {
        setInputField(prevInputField => {
            return {
                ...prevInputField,
                [event.target.name]: event.target.value
            }
        })
    }

    const [extractedNumber, setExtractedNumber] = React.useState(null)

    function chooseRandomPlayer () {
        setExtractedNumber(Math.floor(Math.random() * inputField.randomPlayerNumber) + 1)
    }
    const ranNumImprev = props.randomNumber
    const randNumFixedIndex = ranNumImprev - 1
    const title = props.imprev[randNumFixedIndex].title
    const description = props.imprev[randNumFixedIndex].description
    const isImprev = props.imprev[randNumFixedIndex].isImprev
    const ultEstrazione = props.imprev[randNumFixedIndex].ultEstrazione

    return (
        <main className="main">

            {/* IMPREVISTI PREPARTITA */}

            {props.mainState === "prepartita" && (
                <div className="displayPrepartita">
                    <div className="btn-randNum" onClick={props.randNumBox}>ESTRAI</div>
                    <h2 className={isImprev ? "red-alert" : ""} id="randomNumber">{ranNumImprev}</h2>
                    {ultEstrazione && <div className="img-impr"></div>}
                    <h3 className={isImprev ? "red-alert" : ""}>{title}</h3>
                    <p>{description}</p>
                    {ultEstrazione && <div className="ultEstrazione">
                        <div className="container">
                            <input type="number"
                            name="randomPlayerNumber" 
                            value={inputField.randomPlayerNumber} 
                            onChange={handleChange}
                            min="1" max="35"
                            />
                            <div className="btn-player" onClick={chooseRandomPlayer}>ESTRAI</div>
                        </div>
                        <div className="randomPlayer">{extractedNumber}</div>
                    </div>}
                </div>
            )}

            {/* IMPREVISTI PEGGIORE DELLA SETTIMANA */}

            {props.mainState === "settimana" &&( 
                <div className="displayPrepartita">
                    <div className="btn-randNum" onClick={props.randNumBox}>ESTRAI</div>
                    <h2 className={props.imprevSettim[randNumFixedIndex].isImprev ? "red-alert" : ""} id="randomNumber">{ranNumImprev}</h2>
                    <h3 className={props.imprevSettim[randNumFixedIndex].isImprev ? "red-alert" : ""}>{props.imprevSettim[randNumFixedIndex].title}</h3>
                    <p>{props.imprevSettim[randNumFixedIndex].description}</p>
                </div>
                    )}
        </main>
    );
}
