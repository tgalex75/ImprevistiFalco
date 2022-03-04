import React from "react";

export default function Main(props) {
    /* const imprevistiMappati = props.imprev.map((item, index)=>(
        {
            id: item.id,
            title: item.title,
            description: item.description,
            isImprev: item.isImprev
        }
    )) */
    console.clear()    
    let ranNumImprev = props.randomNumber
    console.log(typeof ranNumImprev)
    return (
        <main className="main">
            {props.mainState === "prepartita" && (
                <div className="displayPrepartita">
                    <h1>Imprevisti PREPARTITA</h1>
                    <div id="btn-randNum" onClick={props.randNumBox}>ESTRAI</div>
                    <h2 id="randomNumber">{ranNumImprev}</h2>
                    <h3>{props.imprev[0].title}</h3>
                    <p>{props.imprev[0].description}</p>
                </div>
            )}

            {props.mainState === "settimana" && <h1>Imprevisti SETTIMANA</h1>}
        </main>
    );
}
