import React, {useState} from "react";

function ExperienceBar({ x, y }) {

    const[expDisplay, setExpDisplay] = useState(JSON.parse(localStorage.getItem("userExp")) || 0)

    const barStyle = {
        zIndex: "3",
        width: "400px",
        height: "20px",
        border: "1px solid #750D37",
        borderRadius: "15px",
        position: "absolute",
        left: x,
        top: y,
    }

    return (
        <div style={barStyle}>
            <p style={{color: "white"}}>{expDisplay}</p>
        </div>
    )
}

export default ExperienceBar