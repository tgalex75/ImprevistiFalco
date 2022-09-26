import React from "react";
import { Link } from "react-router-dom";

import "./MainStyle.css";
import magicu from "../assets/video/magicu.mp4";
import silvio from "../assets/video/silvio.mp4";

const Main = () => {
    const prepRef = React.useRef();
    const settRef = React.useRef();

    const playVideo = (myVideo) => {
        myVideo.play();
    };
    const pauseVideo = (myVideo) => {
        myVideo.pause();
    };

    React.useEffect(() => {}, []);

    return (
        <>
            <main className="main">
                <div className="container">
                    <div
                        className="riquadro"
                        id="impr--pre"
                        onMouseEnter={() => playVideo(prepRef.current)}
                        onMouseLeave={() => pauseVideo(prepRef.current)}
                    >
                        
                        <div className="overlay">
                            <Link to="/prepartita">
                                <h1>
                                    Imprevisti
                                    <br />
                                    Prepartita
                                </h1>
                            </Link>
                        </div>
                        <video ref={prepRef} src={magicu} loop />
                    </div>
                    <div className="riquadro" id="impr--sett"
                    onMouseEnter={() => playVideo(settRef.current)}
                    onMouseLeave={() => pauseVideo(settRef.current)}>
                        
                        <div className="overlay">
                            <Link to="/settimana">
                                <h1>
                                    Imprevisti
                                    <br />
                                    Settimanali
                                </h1>
                            </Link>
                        </div>
                        <video ref={settRef} src={silvio} loop />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
