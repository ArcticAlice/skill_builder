import React from "react";
import Plus from  "../assets/Plus";

function SkillAdder({ onImageUpload }) {
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onImageUpload(url); // Pass the uploaded image URL to the parent
    }
  };

  const imageUploaderStyle = {
    width: "75px",
    height: "75px",
    borderRadius: "25%",
    border: "1px solid #750D37",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "absolute",
    top: "105%",
    left: "105%",
  };


  const handleUploadClick = () => {
    document.getElementById("file-input").click(); // Trigger file input click
  };

  return (
    <div onClick={handleUploadClick} style={imageUploaderStyle}>
      <Plus height="50px" width="50px"/>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default SkillAdder;
