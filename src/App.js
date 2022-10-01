import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Imprevisto from "./pages/Imprevisto";
import Settimana from "./pages/Settimana";
import Footer from "./components/Footer";
import Bg from "./components/Bg";
import ErrorPage from "./pages/ErrorPage";
import { AnimatePresence } from "framer-motion";


export default function App() {
    // Salvare lo stato "theme" nel localStorage
    const getFromLocalStorage = () => {
        return localStorage.getItem("theme")
            ? localStorage.getItem("theme")
            : "dark-mode";
    };

    /* Funzione che aggiorna il tema in base allo State */

    const [theme, setTheme] = useState(getFromLocalStorage());

    // Funzione che cambia il tema in base al valore dello State

    const cambiaTema = () => {
        theme === "light-mode" ? setTheme("dark-mode") : setTheme("light-mode");
    };

    // Al cambio ddello state "theme" verrà attaccata una classe al TAG html
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <AnimatePresence exitBeforeEnter>
            <Bg />
            <Router>
                <Navbar theme={theme} cambiaTema={cambiaTema} />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Main />} />
                        <Route path="/prepartita" element={<Imprevisto />} />
                        <Route path="/settimana" element={<Settimana />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
            <Footer />
        </AnimatePresence>
    );
}
