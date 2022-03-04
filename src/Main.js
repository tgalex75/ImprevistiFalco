import React from "react";

export default function Main(props) {
    let ranNum = props.randomNumber
    console.log(props.imprev[11].id)
    return (
        <main className="main">
            {props.mainState === "prepartita" && (
                <div className="displayPrepartita">
                    <h1>Imprevisti PREPARTITA</h1>
                    <div id="btn-randNum" onClick={props.randNumBox}>ESTRAI</div>
                    <h2 id="randomNumber">{ranNum}</h2>
                    <h3>{props.imprev[ranNum].title}</h3>
                    <p>{props.imprev[ranNum].description}</p>
                </div>
            )}

            {props.mainState === "settimana" && <h1>Imprevisti SETTIMANA</h1>}
        </main>
    );
}
