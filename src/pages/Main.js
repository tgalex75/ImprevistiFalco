import React from "react";
import { Link } from "react-router-dom";

//import Image from "mui-image";
import "./MainStyle.css";
// import magicu from "../assets/video/magicu.mp4";
// import silvio from "../assets/video/silvio.mp4";

const Main = () => {
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="riquadro" id="impr--pre">
                        {/* <Image
                            src="https://picsum.photos/id/696/2000"
                            height="100%"
                            width="100%"
                            fit="cover"
                            duration={1000}
                            easing=""
                            bgColor="teal"
                        /> */}
                        <div className="overlay">
                            <Link to="/prepartita">
                                <h1>
                                    Imprevisti
                                    <br />
                                    Prepartita
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className="riquadro" id="impr--sett">
                        {/* <Image
                            src="https://picsum.photos/id/547/2000"
                            height="100%"
                            width="100%"
                            fit="cover"
                            duration={1000}
                            easing=""
                            bgColor="teal"
                        /> */}
                        <div className="overlay">
                            <Link to="/settimana">
                                <h1>
                                    Imprevisti
                                    <br />
                                    Settimanali
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Main;
