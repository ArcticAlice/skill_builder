import React, { useState, useEffect } from "react";

function ExperienceBar({ x, y }) {

    const [level, setLevel] = useState(JSON.parse(localStorage.getItem("userLvl")) || 1);
    const [requiredExp, setRequiredExp] = useState(Math.pow(level + 1, 5));
    const [exp, setExp] = useState(JSON.parse(localStorage.getItem("userExp")));

    useEffect(() => {
        if (exp >= requiredExp) {
            setLevel((l) => l + 1);
            setRequiredExp(Math.pow(level + 2, 5));
            setExp((e) => e - Math.pow(level, 5));
            localStorage.setItem("userLvl", JSON.stringify(level));
            localStorage.setItem("userExp", JSON.stringify(exp));
        }
    }, [exp, requiredExp, level]);


    const style = {
        position: "absolute",
        top: y,
        left: x,
        height: "100px",
        width: "400px"
    }

    const barContainerStyle = {
        zIndex: "3",
        width: "400px",
        height: "20px",
        border: "2px solid #750D37",
        borderRadius: "15px",
        backgroundColor: "black",
        overflow: "hidden",
    };

    const fillStyle = {
        height: "100%",
        width: `${(exp / requiredExp) * 100}%`,
        backgroundColor: "#750D37",
        transition: "width 0.3s ease-in-out",
    };

    const textStyle = {
        color: "white",
        fontSize: "14px",
        textAlign: "center",
        marginTop: "5px",
    };

    return (
        <div style={style}>

            <div style={barContainerStyle}>
                <div style={fillStyle}></div>
            </div>
            <p style={textStyle}>
                {exp} / {requiredExp}
            </p>
            <p style={textStyle}>Level: {level}</p>

        </div>
    );
}

export default ExperienceBar;
