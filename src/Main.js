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
                    <h1>Imprevisti PREPARTITA</h1>
                    <div className="btn-randNum" onClick={props.randNumBox}>ESTRAI</div>
                    <h2 id="randomNumber">{ranNumImprev}</h2>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {ultEstrazione && <div className="ultEstrazione">
                        <input type="number" min="1" max="35"/>
                        <div className="btn-player" onClick={props.randNumBox}>ESTRAI</div>
                        <h2 className="randomPlayer">77</h2>
                        <div className="img-impr"></div>
                    </div>}
                </div>
            )}

            {props.mainState === "settimana" && <h1>Imprevisti SETTIMANA</h1>}
        </main>
    );
}
