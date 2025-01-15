import React, { useState } from "react";
import X from "../assets/X";

function PopUp({ show, onClose, onSave }) {

    const [task, setTask] = useState("");
    const [selectedColor, setSelectedColor] = useState("#ffafcc");
    const [exp, setExp] = useState();

    const [circleStyleEasy, setCircleStyleEasy] = useState({
        position: "absolute",
        display: "inline-block",
        width: "10px",
        height: "10px",
        border: "1px solid #87C38F",
        borderRadius: "50%",
        cursor: "pointer",
        left: "5%",
        top: "85%"
    });

    const [circleStyleMed, setCircleStyleMed] = useState({
        position: "absolute",
        display: "inline-block",
        width: "10px",
        height: "10px",
        border: "1px solid #FBBFCA",
        borderRadius: "50%",
        cursor: "pointer",
        left: "15%",
        top: "85%"
    });

    const [circleStyleHard, setCircleStyleHard] = useState({
        position: "absolute",
        display: "inline-block",
        width: "10px",
        height: "10px",
        border: "1px solid #A663CC",
        borderRadius: "50%",
        cursor: "pointer",
        left: "25%",
        top: "85%"
    });

    if (!show) return null;

    const handleSave = () => {
        if (task.trim() === "") {
            alert("Task name cannot be empty!");
            return;
        }
        onSave({ taskName: task, taskColor: selectedColor, experience: exp });
        setTask("");
        onClose();
    };

    const handleColorChange = (index, color) => {
        setCircleStyleEasy((c) => ({ ...c, backgroundColor: "black" }));
        setCircleStyleMed((c) => ({ ...c, backgroundColor: "black" }));
        setCircleStyleHard((c) => ({ ...c, backgroundColor: "black" }));

        setSelectedColor(color);

        if (index === 0) {
            setCircleStyleEasy((c) => ({ ...c, backgroundColor: color }));
            setExp(5);
        } else if (index === 1) {
            setCircleStyleMed((c) => ({ ...c, backgroundColor: color }));
            setExp(15);
        } else {
            setCircleStyleHard((c) => ({ ...c, backgroundColor: color }));
            setExp(50);
        }
    };

    const popUpStyle = {
        position: "absolute",
        width: "500px",
        height: "150px",
        backgroundColor: "black",
        padding: "20px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 100,
        overflow: "auto",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        border: "1px solid #750D37"
    };

    const saveButtonStyle = {
        position: "absolute",
        top: "75%",
        left: "87%",
        backgroundColor: "#00B4D8",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        cursor: "pointer"
    };

    const textareaStyle = {
        flexGrow: 1,
        resize: "none",
        width: "100%",
        height: "auto",
        marginTop: "10px",
        marginBottom: "40px",
        boxSizing: "border-box",
        border: "none",
        outline: "none",
        backgroundColor: "black",
        color: "#00B4D8"
    };

    return (
        <div style={popUpStyle}>
            <X onClick={onClose}/>
            <textarea
                style={textareaStyle}
                placeholder="Enter Task!"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <div
                style={circleStyleEasy}
                onClick={() => handleColorChange(0, "#87C38F")}
            ></div>
            <div
                style={circleStyleMed}
                onClick={() => handleColorChange(1, "#FBBFCA")}
            ></div>
            <div
                style={circleStyleHard}
                onClick={() => handleColorChange(2, "#A663CC")}
            ></div>
            <button style={saveButtonStyle} onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default PopUp;
