import React, { useState } from "react";
import SkillCircles from "./SkillCircles";

function ImageAdding() {
  const [imageUrl, setImageUrl] = useState(""); // Shared state for the image URL

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // Convert file to URL
      setImageUrl(url); // Update the state
    }
  };

  const imageUploaderStyle = {
    width: "75px",
    height: "75px",
    borderRadius: "25%",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  };

  const handleUploadClick = () => {
    document.getElementById("file-input").click(); // Trigger file input click
  };

  return (
    <div>
      <div onClick={handleUploadClick} style={imageUploaderStyle}>
      </div>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Example SkillCircles */}
      <SkillCircles x="59.2%" y="23%" imageUrl={imageUrl} />
    </div>
  );
}

export default ImageAdding;
