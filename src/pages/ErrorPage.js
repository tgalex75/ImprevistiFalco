import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const styles = {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: "10"
    };
    return (
        <div style={styles}>
            <h1>Page Not Found</h1>
            <Link to="/home" style={{ fontSize: "1rem", color: "#ff0066", fontWeight: "600" }}>
                <p>Torna alla Homepage</p>
            </Link>
        </div>
    );
};

export default ErrorPage;
