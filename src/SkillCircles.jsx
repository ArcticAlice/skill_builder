import React from "react";

function SkillCircles({ x, y, imageUrl }) {
  const skillCircleStyles = {
    position: "absolute",
    width: "70px",
    height: "70px",
    zIndex: "3",
    top: y,
    left: x,
    transform: `translate(-${x}, -${y})`,
    border: "1px solid #444545",
    borderRadius: "50%",
    backgroundImage: `url(${imageUrl || "./assets/Dio.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={skillCircleStyles}></div>;
}

export default SkillCircles;
