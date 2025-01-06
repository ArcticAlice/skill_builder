import React, { useState } from "react";
import DivCircles from "../Components/DivCircles";
import Plus from "../assets/Plus";
import X from "../assets/X";

function PlusButton({ tap }) {
    const plusStyle = {
        border: "1px solid black",
        width: "50px",
        height: "50px",
        borderRadius: "25%",
        position: "absolute",
        backgroundColor: "none",
        top: "90%",
        left: "94%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    };

    return (
        <div style={plusStyle} onClick={tap}>
            <Plus> style={{cursor: "pointer"}} </Plus>
        </div>
    );
}

function PopUp({ show, onClose, onSave }) {
    const [task, setTask] = useState("");
    const [selectedColor, setSelectedColor] = useState("#FF0000"); // Default to the first color

    if (!show) return null;

    const handleSave = () => {
        if (task.trim() === "") {
            alert("Task name cannot be empty!");
            return;
        }
        onSave({ taskName: task, taskColor: selectedColor });
        setTask("");
        setSelectedColor("#FF0000");
        onClose();
    };

    const popUpStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ADE8F4",
        padding: "20px",
        width: "300px",
        height: "250px",
        zIndex: "1000",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const closeButtonStyle = {
        position: "absolute",
        top: "10px",
        left: "10px",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "16px",
        cursor: "pointer",
    };

    const saveButtonStyle = {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        backgroundColor: "#0077B6",
        color: "#FFF",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        cursor: "pointer",
    };

    const textareaStyle = {
        flexGrow: 1,
        resize: "none",
        width: "100%",
        height: "auto",
        boxSizing: "border-box",
        border: "1px solid #90E0EF",
        borderRadius: "4px",
        padding: "8px",
        outline: "none",
        color: "#03045E",
        backgroundColor: "#E0F7FA",
    };

    const circlesContainerStyle = {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
    };

    const circleWrapperStyle = (color) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: selectedColor === color ? "2px solid black" : "1px solid gray",
        cursor: "pointer",
    });

    return (
        <div style={popUpStyle}>
            <button style={closeButtonStyle} onClick={onClose}>
                X
            </button>
            <textarea
                style={textareaStyle}
                placeholder="Enter Task!"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <div style={circlesContainerStyle}>
                <div
                    style={circleWrapperStyle("#FF0000")}
                    onClick={() => setSelectedColor("#FF0000")}
                >
                    <DivCircles color="#FF0000" />
                </div>
                <div
                    style={circleWrapperStyle("#00FF00")}
                    onClick={() => setSelectedColor("#00FF00")}
                >
                    <DivCircles color="#00FF00" />
                </div>
                <div
                    style={circleWrapperStyle("#0000FF")}
                    onClick={() => setSelectedColor("#0000FF")}
                >
                    <DivCircles color="#0000FF" />
                </div>
            </div>
            <button style={saveButtonStyle} onClick={handleSave}>
                Save
            </button>
        </div>
    );
}


function TaskTemplate({ taskName, taskColor }) {
    const taskTemplateStyle = {
        width: "80vh",
        height: "10vh",
        padding: "10px",
        border: "1px solid black",
        marginBottom: "5px",
        borderRadius: "5px",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        alignItems: "center",
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: "#F9F9F9",
    };

    return (
        <div style={taskTemplateStyle}>
            <DivCircles color={taskColor} />
            <h3>{taskName}</h3>
        </div>
    );
}

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const openPopUp = () => setIsPopUpOpen(true);
    const closePopUp = () => setIsPopUpOpen(false);

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                {tasks.map((task, index) => (
                    <TaskTemplate
                        key={index}
                        taskName={task.taskName}
                        taskColor={task.taskColor}
                    />
                ))}
            </div>
            <PlusButton tap={openPopUp} />
            <PopUp show={isPopUpOpen} onClose={closePopUp} onSave={addTask} />
        </div>
    );
}

export default Tasks;
