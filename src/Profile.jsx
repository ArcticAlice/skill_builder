import profilePicture from './assets/Dio.jpeg';

function DivCircles(props) {
    const divCircleStyles = {
        position: "absolute",
        width: "10px",
        height: "10px",
        zIndex: "3",
        backgroundColor: "#00B4D8",
        top: props.y,
        left: props.x,
        transform: `translate(-50%, -50%)`,
        border: "1px solid #00B4D8",
        borderRadius: "50%"
    };

    return <div style={divCircleStyles}></div>;
}

function Profile() {

    const circleCount = 8; 
    const radius = 115;

    const circles = Array.from({ length: circleCount }, (_, index) => {
        const angle = (2 * Math.PI * index) / circleCount; // Calculate angle for each circle
        const x = 200 + radius * Math.cos(angle); // Adjust x position based on radius and angle
        const y = 200 + radius * Math.sin(angle); // Adjust y position based on radius and angle
        return <DivCircles key={index} x={`${x}px`} y={`${y}px`} />;
    });

    const containerStyle = {
        zIndex: "2",
        position: "relative",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        border: "1px solid black",
        display: "flex",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    const profileStyle = {
        zIndex: "2",
        width: "175px",
        border: "1.5px solid black",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    const circleStyle = {
        width: "230px",
        height: "230px",
        border: "1px solid black",
        zIndex: "2",
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    return (
        <div style={containerStyle}>
            {circles}
            <img style={profileStyle} src={profilePicture} alt="Profile" />
            <div style={circleStyle}></div>
        </div>
    );
}

export default Profile;
