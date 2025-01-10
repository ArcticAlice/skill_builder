function ExperienceBar({ x, y }) {

    const barStyle = {
        zIndex: "3",
        width: "400px",
        height: "20px",
        border: "1px solid black",
        borderRadius: "15px",
        position: "absolute",
        left: x,
        top: y,
    }

    const something = JSON.parse(localStorage.getItem("userExp")) || 0;

    return (
        <div style={barStyle}>
            {something}
        </div>
    )
}

export default ExperienceBar