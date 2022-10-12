import React from "react";
import PropTypes from "prop-types";
import Main from "../pages/Main";
import Imprevisto from "../pages/Imprevisto";
import Settimana from "../pages/Settimana";
import ErrorPage from "../pages/ErrorPage";
//import MediaOverall from "../pages/MediaOverall";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main />} />
                <Route path="/home" element={<Main />} />
                <Route path="/prepartita" element={<Imprevisto />} />
                <Route path="/settimana" element={<Settimana />} />
<<<<<<< Updated upstream
                {/* <Route path="/calcolo-media" element={<MediaOverall />} /> */}
=======
>>>>>>> Stashed changes
                <Route path="*" element={<ErrorPage />} />
                <Route path="/regolamento" element={<Regolamento />} />
            </Routes>
        </AnimatePresence>
    );
}

AnimatedRoutes.propTypes = {
    cambiaTema: PropTypes.any,
    theme: PropTypes.any,
};

export default AnimatedRoutes;
