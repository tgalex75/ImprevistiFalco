import React from "react";
import { Link } from "react-router-dom";
import "./MainStyle.css";
import poster1 from "../assets/camelito_ly.jpg";
import poster2 from "../assets/lepresident.jpg";
import poster3 from "../assets/lyon.jpg";
import poster4 from "../assets/mosca.jpg";
//import siAmo from "../assets/siAmoAncoraQui.png";
import logoTeam from "../assets/logo-team2.png";
import coppa from "../assets/champions.png";
import { motion } from "framer-motion";

const Main = () => {

    React.useEffect(() => {}, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <main className="main">
                <div className="container">
                    <img className="logo-team" src={logoTeam} alt="logo team" />
                    <img className="coppa" src={coppa} alt="logo team" />
                    <div
                        className="riquadro"
                        id="impr--pre"
                        style={{
                            backgroundImage: `url(${poster1})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top center",
                        }}
                    >
                        <div className="overlay">
                            <Link className="links" to="/prepartita">
                                <h1>
                                    Imprevisti
                                    <br />
                                    Prepartita
                                </h1>
                            </Link>
                        </div>
                        
                    </div>
                    {
                        <div
                            className="riquadro"
                            id="impr--sett"
                            style={{
                                backgroundImage: `url(${poster2})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top center",
                            }}
                        >
                            <div className="overlay">
                                <Link className="links" to="/settimana">
                                    <h1>
                                        Imprevisti
                                        <br />
                                        Settimanali
                                    </h1>
                                </Link>
                            </div>
                            
                        </div>
                    }
                </div>
                <div className="container containerBis">
                    <div
                        className="riquadro"
                        style={{
                            backgroundImage: `url(${poster3})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "top center",
                        }}
                    >
                        <div className="overlay">
                            <Link className="links" to="/calcolo-media">
                                <h2>Media Overall</h2>
                            </Link>
                        </div>
                    </div>
                    {
                        <div
                            className="riquadro"
                            style={{
                                backgroundImage: `url(${poster4})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top center",
                            }}
                        >
                            <div className="overlay">
                                <Link
                                    className="links"
                                    to="/migliore-peggiore-stagione"
                                >
                                    <h2>Migliore e Peggiore</h2>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </main>
            {/* <div className="siamoTornati">
                <img src={siAmo} alt="immagine siAmo ancora qui" />
            </div> */}
        </motion.div>
    );
};

export default Main;
