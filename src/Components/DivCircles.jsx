function DivCircles(props) {
    const divCircleStyles = {
        position: "absolute",
        width: "13px",
        height: "13px",
        zIndex: "3",
        backgroundColor: props.color,
        top: props.y,
        left: props.x,
        transform: `translate(-50%, -50%)`,
        borderRadius: "50%"
    };

    return <div className="divcircles" style={divCircleStyles}></div>;
}

export default DivCircles;