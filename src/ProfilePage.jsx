import React, { useState } from "react";
import SkillCircles from "./SkillCircles";
import SkillAdder from "./SkillAdder";
import Profile from "./Profile";
import ExperienceBar from "./ExperienceBar";

function ProfilePage() {
  
  const circleCount = 8;
  const radius = 200;

  const [imageUrls, setImageUrls] = useState(Array(circleCount).fill(null));

  const handleImageUpload = (url) => {
    setImageUrls((prevUrls) => {
      const nextIndex = prevUrls.findIndex((imageUrl) => imageUrl === null);
      if (nextIndex !== -1) {
        const updatedUrls = [...prevUrls];
        updatedUrls[nextIndex] = url;
        return updatedUrls;
      }
      return prevUrls; 
    });
  };

  const circles = Array.from({ length: circleCount }, (_, index) => {
    const angle = (2 * Math.PI * index) / circleCount + Math.PI / circleCount;
    const x = 413 + radius * Math.cos(angle);
    const y = 325 + radius * Math.sin(angle);
    return <SkillCircles key={index} x={`${x}px`} y={`${y}px`} imageUrl={imageUrls[index]} />;
  });

  const profilePageStyles = {
    padding: "0px",
    margin: "0px",
    width: "100vh",
    height: "80vh",
    position: "relative",
    left: "30%",
    display: "flex",
  };

  return (
    <div style={profilePageStyles}>
      {circles}
      <SkillAdder onImageUpload={handleImageUpload} />
      <Profile />
      <ExperienceBar x="27%" y="93%"/>
    </div>
  );
}

export default ProfilePage;
