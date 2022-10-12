import React from "react";
import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

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
            color: "#181818d9",
            fontSize: "2rem",
            textAlign: "center",
            fontWeight: "600",
            width: "60%",
            margin: "0 auto",
            paddingRight: "0.2rem",
        },
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

<<<<<<< Updated upstream
=======
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

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        e.preventDefault();
        setValues({
            ...values,
            [name]: value,
        });
    };


    const calcolaMedia = () => {
        let sum = 0;
        for (let i in values) {
            sum += parseFloat(values[i]);
        }
        return (sum / 11).toFixed();
    };

    const result = calcolaMedia();
    console.log(result);

    /* BUTTON STILED */

    const ColorButton = styled(Button)(() => ({
        color: "#efefef",
        backgroundColor: "#ff0066",
        "&:hover": {
            backgroundColor: "#ff0066",
        },
    }));
>>>>>>> Stashed changes

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1
                style={{
                    textAlign: "center",
                    padding: "3.5rem 0 1rem",
                }}
            >
                MediaOverall
            </h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={4} spacing={2}>
                    <Grid xs={2} md={2} xsOffset={3} mdOffset={3}>
                        <Item>
                            <TextField
                                key="p10"
                                id="p10"
                                size="small"
                                label="Overall P10"
                                name="randomPlayerNum"
                                placeholder="68"
                                type="number"
<<<<<<< Updated upstream
                                value={10}
=======
                                value={values.p10}
                                onChange={handleChange}
>>>>>>> Stashed changes
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
                                key="p11"
                                id="p11"
                                size="small"
                                label="Overall P11"
                                name="randomPlayerNum"
                                placeholder="68"
                                type="number"
<<<<<<< Updated upstream
                                value={60}
=======
                                value={values.p11}
                                onChange={handleChange}
>>>>>>> Stashed changes
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
                        <Item>
                            <TextField
                                key="p9"
                                id="p9"
                                size="small"
                                label="Overall P9"
                                name="p9"
                                type="number"
                                value={values.p9}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>
                            <TextField
                                key="p8"
                                id="p8"
                                size="small"
                                label="Overall P8"
                                name="p8"
                                type="number"
                                value={values.p8}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>
                            <TextField
                                key="p7"
                                id="p7"
                                size="small"
                                label="Overall P7"
                                name="p7"
                                type="number"
                                value={values.p7}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>
                            <TextField
                                key="p6"
                                id="p6"
                                size="small"
                                label="Overall P6"
                                name="p6"
                                type="number"
                                value={values.p6}
                                onChange={handleChange}
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
                        <Item>
                            <TextField
                                key="p5"
                                id="p5"
                                size="small"
                                label="Overall P5"
                                name="p5"
                                type="number"
                                value={values.p5}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>
                            <TextField
                                key="p4"
                                id="p4"
                                size="small"
                                label="Overall P4"
                                name="p4"
                                type="number"
                                value={values.p4}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>
                            <TextField
                                key="p3"
                                id="p3"
                                size="small"
                                label="Overall P3"
                                name="p3"
                                type="number"
                                value={values.p3}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                    <Grid xs={2} md={2}>
                        <Item>
                            <TextField
                                key="p2"
                                id="p2"
                                size="small"
                                label="Overall P2"
                                name="p2"
                                type="number"
                                value={values.p2}
                                onChange={handleChange}
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
                    <Grid xs={2} md={2} xsOffset={5} mdOffset={5}>
                        <Item>
                            <TextField
                                key="p1"
                                id="p1"
                                size="small"
                                label="Overall P1"
                                name="p1"
                                type="number"
                                value={values.p1}
                                onChange={handleChange}
                                inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                }}
                                sx={CssTextField}
                            />
                        </Item>
                    </Grid>
                </Grid>
                <Box
                    style={{
                        margin: "0 auto",
                        width: "30vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "0.5rem",
                    }}
                >
                    <ColorButton
                        style={{
                            textAlign: "center",
                            width: "100%",
                            marginTop: "1.2rem",
                            fontWeight: "800",
                        }}
                        onClick={handleClick}
                        variant="contained"
                    >
                        Calcola media Overall
                    </ColorButton>
                    {isVisible && (
                        <h1
                            style={{
                                backgroundColor: "teal",
                                borderRadius: "50%",
                                padding: ".2rem 2rem",
                                marginTop: "1rem",
                                color: "#efefef",
                                fontSize: "2.5rem"

                            }}
                        >
                            {result}
                        </h1>
                    )}
                </Box>
            </Box>
        </motion.div>
    );
};

export default MediaOverall;
