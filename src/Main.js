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
    let ranNumImprev = props.randomNumber
    let randNumFixedIndex = ranNumImprev - 1
    let title = props.imprev[randNumFixedIndex -1].title
    let description = props.imprev[randNumFixedIndex -1].description
    let isImprev = props.imprev[randNumFixedIndex -1].isImprev
    let ultEstrazione = props.imprev[randNumFixedIndex -1].ultEstrazione

    return (
        <main className="main">
            {props.mainState === "prepartita" && (
                <div className="displayPrepartita">
                    <div className="btn-randNum" onClick={props.randNumBox}>ESTRAI</div>
                    <h2 className={isImprev ? "red-alert" : ""} id="randomNumber">{ranNumImprev}</h2>
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
                        <div className="img-impr"></div>
                    </div>}
                </div>
            )}

            {props.mainState === "settimana" && <h1>Imprevisti SETTIMANA</h1>}
        </main>
    );
}
