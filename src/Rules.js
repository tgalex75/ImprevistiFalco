import React from "react";
import "./RulesStyle.css";
import "./tooltip.css";

export default function Rules(props) {
    const imprePre = props.imprev.map((el) => (
        <div className="tooltipr--map">
            <div key={el.id} className="mapped--row">
                <div className="col--number">{el.id}</div>
                <div className="col--title">{el.title}</div>
            </div>
            {el.isImprev && <div className="right">
                <p>{el.description}</p>
                <i></i>
            </div>}
        </div>
    ));

    const impreSett = props.imprevSettim.map((el) => (
        <div className="tooltip--map">
            <div key={el.id} className="mapped--row">
                <div className="col--number">{el.id}</div>
                <div className="col--title">{el.title}</div>
            </div>
            {el.isImprev && <div className="left">
                <p>{el.description}</p>
                <i></i>
            </div>}
        </div>
    ));

    return (
        <>
            <h2 id="title--reg">Regolamento</h2>
            <section id="rules--container">
                <div className="global--container">
                    <h4 className="reg--title pre">PrePartita</h4>
                    <div className="mapped--container">{imprePre}</div>
                </div>
                <div className="global--container">
                    <h4 className="reg--title set">Peggiore Settimana</h4>
                    <div className="mapped--container">{impreSett}</div>
                </div>
            </section>
        </>
    );
}
