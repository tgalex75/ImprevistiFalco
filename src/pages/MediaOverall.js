import React from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const MediaOverall = () => {
    const CssTextField = {
        "& label.Mui-focused": {
            color: "#ff0066",
        },
        "& .MuiInputLabel-root": {
            color: "rgba(128, 128, 128, 0.4)",
        },
        "& .MuiInputLabel-focused": {
            color: "#efefef",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#ff0066",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgba(128, 128, 128, 0.4)",
            },
            "&:hover fieldset": {
                borderColor: "#efefef",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#ff0066",
            },
        },
        "& .MuiInputBase-input": {
            color: "#efefef",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "600",
            width: "60%",
        },
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1
                style={{
                    textAlign: "center",
                    padding: "5rem 0 3rem",
                }}
            >
                MediaOverall
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={4} spacing={2}>
                    <Grid xs={2} md={2} xsOffset={3} mdOffset={3}>
                        <Item>
                            <TextField
                                id="p10"
                                size="small"
                                label="Overall P10"
                                name="randomPlayerNum"
                                placeholder="68"
                                type="number"
                                value={10}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2} xsOffset={2} mdOffset={2}>
                        <Item>
                            <TextField
                                id="p11"
                                size="small"
                                label="Overall P11"
                                name="randomPlayerNum"
                                placeholder="68"
                                type="number"
                                value={60}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={2} md={2} xsOffset={2} mdOffset={2}>
                        <Item>Pl-9</Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>Pl-8</Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>Pl-7</Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>Pl-6</Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={2} md={2} xsOffset={2} mdOffset={2}>
                        <Item>Pl-5</Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>Pl-4</Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>Pl-3</Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>Pl-2</Item>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid xs={2} md={2} xsOffset={5} mdOffset={5}>
                        <Item>Pl-1</Item>
                    </Grid>
                </Grid>
            </Box>
            <Box></Box>
        </motion.div>
    );
};

export default MediaOverall;
