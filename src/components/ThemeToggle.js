import React, { Fragment } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import "./ThemeToggle.css";

const ThemeToggle = (props) => {
  const { theme, cambiaTema } = props;

  return (
    <>
      <Tooltip title="Cambia il tema" arrow>
        <div className="theme-toggle" onClick={cambiaTema}>
          {theme === "light-mode" ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </Tooltip>
    </>
  );
};

export default ThemeToggle;
