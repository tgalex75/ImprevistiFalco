import PropTypes from "prop-types";
import React, { useState } from "react";
import { motion } from "framer-motion";

import menuItems from "../data/menuItems";
import frame from "../assets/88.png";

const MediaOverall = () => {
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
            className="w-full h-screen mx-auto grow flex flex-col items-center justify-around"
        >
            <h1 className="text-center pt-14 px-0 pb-4 text-4xl font-bold">
                Media Overall
            </h1>

            <div className="w-full flex flex-col items-center justify-evenly z-10">
                <div className="flex items-center justify-around my-1">
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p11"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-11
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-11"
                            name="p11"
                            value={values.p11}
                            label="player-11"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p10"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-10
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-10"
                            name="p10"
                            value={values.p10}
                            label="player-10"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
                <div className="flex items-center justify-around my-1">
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p9"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-9
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-9"
                            name="p9"
                            value={values.p9}
                            label="player-9"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p8"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-8
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-8"
                            name="p8"
                            value={values.p8}
                            label="player-8"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p7"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-7
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-7"
                            name="p7"
                            value={values.p7}
                            label="player-7"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p6"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-6
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-6"
                            name="p6"
                            value={values.p6}
                            label="player-6"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
                <div className="flex items-center justify-around my-1">
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p5"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-5
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-5"
                            name="p5"
                            value={values.p5}
                            label="player-5"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p4"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-4
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-4"
                            name="p4"
                            value={values.p4}
                            label="player-4"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p3"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-3
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-3"
                            name="p3"
                            value={values.p3}
                            label="player-3"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p2"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-2
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-2"
                            name="p2"
                            value={values.p2}
                            label="player-2"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
                <div className="flex items-center justify-around my-1">
                    <form className="font-semibold m-2 min-w-[15vw] flex items-center justify-center relative outline outline-1 rounded hover:text-[#ff0066]">
                        <label
                            id="select-p1"
                            className="absolute -top-5 left-0 text-xs pl-2"
                        >
                            PL-1
                        </label>
                        <select
                            className="bg-transparent p-2 hover:text-[#ff0066]"
                            id="player-1"
                            name="p1"
                            value={values.p1}
                            label="player-1"
                            onChange={handleChange}
                        >
                            {menuItems.map((option, index) => (
                                <option
                                    key={index}
                                    value={option.value}
                                    className=""
                                >
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </form>
                </div>
            </div>
            <div
                className="min-w-[40vw] flex flex-col items-center justify-around p-4 mb-4 font-bold"
                style={{
                    backgroundImage: `url(${frame})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "contain",
                }}
            >
                <h3 className="text-[#ff0066] text-[calc(.5rem+1.2vw)] mt-4">
                    Media:
                </h3>
                <h2
                    className="text-[calc(2.2rem+5vw)]"
                >
                    {result}
                </h2>
            </div>
        </motion.div>
    );
};

MediaOverall.propTypes = {
    theme: PropTypes.any,
};

export default MediaOverall;
