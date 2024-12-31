import profilePicture from './assets/Dio.jpeg'


function DivCircles(props) {

    const divCirleStyles = {
        position: "absolute",
        width: "10px",
        height: "10px",
        zIndex: "3",
        backgroundColor: "#444545",
        top: props.y,
        left: props.x,
        transform: `translate(-${props.x}, -${props.y})`,
        border: "1px solid #444545",
        borderRadius: "50%"
    }

    return (
        <div style={divCirleStyles}>
            
        </div>
    )
}

function Profile() {

    const containerStyle = {
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
        zIndex: "5",
        width: "175px",
        border: "2px solid black",
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
            <DivCircles x="49%" y="10%" /> 
            <DivCircles x="80%" y="23%" />
            <DivCircles x="90%" y="50%" /> 
            <DivCircles x="80%" y="77%" />
            <DivCircles x="50%" y="90%" /> 
            <DivCircles x="20%" y="77%" />
            <DivCircles x="20%" y="23%" />
            <DivCircles x="10%" y="50%" /> 
            <img style={profileStyle} src={profilePicture} alt="Profile" />
            <div style={circleStyle}></div>
        </div>
    );
    
    
}

export default Profile