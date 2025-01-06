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

    return (
        <div style={barStyle}>

        </div>
    )
}

export default ExperienceBar