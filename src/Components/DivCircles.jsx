function DivCircles(props) {
    const divCircleStyles = {
        position: "absolute",
        width: "10px",
        height: "10px",
        zIndex: "3",
        backgroundColor: props.color,
        top: props.y,
        left: props.x,
        transform: `translate(-50%, -50%)`,
        border: "1px solid #00B4D8",
        borderRadius: "50%"
    };

    return <div style={divCircleStyles}></div>;
}

export default DivCircles;