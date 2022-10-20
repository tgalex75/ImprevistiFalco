import PropTypes from "prop-types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import menuItems from "../data/menuItems";
import frame from "../assets/88.png";


const MediaOverall = () => {

    const classes ={
        label: {
            color: "var(--clr-text) !important",
            "&.Mui-focused": {
                color: "var(--clr-primary) !important",
            },
        },
        select: {
            textAlign: "center",
            "& .MuiSelect-select": {
                color: "var(--clr-text) !important",
                opacity: "0.7"
            },
            "& .MuiSelect-select:hover": {
                color: "var(--clr-text) !important",
                opacity: "1"
            },
            "& .MuiSvgIcon-root": {
                color: "var(--clr-text) !important",
            },
            "& fieldset": {
                borderColor: "var(--clr-text) !important",
            },
            "& fieldset:hover": {
                borderColor: "var(--clr-primary) !important",
            },
            background: {
                paper: "#424242"
            }
        },
    };

    const defaultValues = {
        p1: 69,
        p2: 69,
        p3: 69,
        p4: 69,
        p5: 69,
        p6: 69,
        p7: 69,
        p8: 69,
        p9: 69,
        p10: 69,
        p11: 69,
    };

    const [values, setValues] = useState(defaultValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        /* e.preventDefault(); */
        setValues({
            ...values,
            [name]: value,
        });
    };

    let sum = 0;

    const calcolaMedia = () => {
        for (let i in values) {
            sum += parseFloat(values[i]);
        }
        return (sum / 11).toFixed();
    };

    const result = calcolaMedia();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                width: "100%",
                margin: "0 auto",
            }}
            >
            <h1
                style={{
                    textAlign: "center",
                    padding: "3.5rem 0 1rem",
                }}
                >
                Media Overall
            </h1>

            <Box
                sx={{
                    flexGrow: 1,
                }}
                >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Box sx={{}}>
                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                id="select-p11"
                                sx={classes.label}
                            >
                                Pl-11
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-11"
                                id="player-11"
                                name="p11"
                                value={values.p11}
                                label="player-11"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p10"
                            >
                                Pl-10
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-10"
                                id="player-10"
                                name="p10"
                                value={values.p10}
                                label="player-10"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p9"
                            >
                                Pl-9
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-9"
                                id="player-9"
                                name="p9"
                                value={values.p9}
                                label="player-9"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p8"
                            >
                                Pl-8
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-8"
                                id="player-8"
                                name="p8"
                                value={values.p8}
                                label="player-8"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p7"
                            >
                                Pl-7
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-7"
                                id="player-7"
                                name="p7"
                                value={values.p7}
                                label="player-7"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p6"
                            >
                                Pl-6
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-6"
                                id="player-6"
                                name="p6"
                                value={values.p6}
                                label="player-6"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p5"
                            >
                                Pl-5
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-5"
                                id="player-5"
                                name="p5"
                                value={values.p5}
                                label="player-5"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p4"
                            >
                                Pl-4
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-4"
                                id="player-4"
                                name="p4"
                                value={values.p4}
                                label="player-4"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p3"
                            >
                                Pl-3
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-3"
                                id="player-3"
                                name="p3"
                                value={values.p3}
                                label="player-3"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p2"
                            >
                                Pl-2
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-2"
                                id="player-2"
                                name="p2"
                                value={values.p2}
                                label="player-2"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl
                            sx={{ m: 1, minWidth: "15vw" }}
                            size="small"
                        >
                            <InputLabel
                                sx={classes.label}
                                id="select-p1"
                            >
                                Pl-1
                            </InputLabel>
                            <Select
                                sx={classes.select}
                                labelId="player-1"
                                id="player-1"
                                name="p1"
                                value={values.p1}
                                label="player-1"
                                onChange={handleChange}
                            >
                                {menuItems.map((option, index) => (
                                    <MenuItem key={index} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box
                    style={{
                        margin: "0 auto",
                        minWidth: "20vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-around",
                        padding: "1.5rem 1.5rem 1rem",
                        backgroundImage: `url(${frame})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                    }}
                >
                    <h3
                        style={{
                            color: "var(--clr-primary)",
                            fontSize: "calc(.5rem + 1.2vw)",
                            textAlign: "center",
                        }}
                    >
                        Media:
                    </h3>
                    <h2
                        style={{
                            fontSize: "calc(2rem + 5vw)",
                        }}
                    >
                        {result}
                    </h2>
                </Box>
            </Box>
        </motion.div>
    );
};

MediaOverall.propTypes = {
    theme: PropTypes.any,
};

export default MediaOverall;
