import React, { useState } from "react";
import DivCircles from "../Components/DivCircles";
import Plus from "../assets/Plus";
import PopUp from "../Components/PopUp";

function PlusButton({ tap }) {
    const plusStyle = {
        border: "1px solid #750D37",
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
            <Plus style={{ cursor: "pointer" }} />
        </div>
    );
}

function TaskTemplate({ taskName, taskColor, complete, experience }) {

    const completeButton = {
        border: "1px solid #00B4D8",
        width: "15px",
        height: "15px",
        display: "inline-block",
        cursor: "pointer",
    };

    const taskTemplateStyle = {
        position: "relative",
        width: "100vh",
        height: "5vh",
        padding: "5px",
        paddingLeft: "20px",
        border: "1px solid #750D37",
        marginBottom: "10px",
        borderRadius: "5px",
        display: "grid",
        gridTemplateColumns: "1fr 15fr",
        alignItems: "center",
        backgroundColor: "black",
    };

    const textStyle = {
        verticalAlign: "center",
        padding: "0",
        margin: "0",
        letterSpacing: "2px",
        color: "white",
    };

    return (
        <div style={taskTemplateStyle}>
            <div style={completeButton} onClick={complete}></div>
            <p style={textStyle}>{taskName} </p>
            <DivCircles x="95%" y="50%" color={taskColor} />
        </div>
    );
}

function Tasks() {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("skillTasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const addTask = (task) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks, task];
            localStorage.setItem("skillTasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const completeTask = (index) => {
        const addExpfunction = () => {
            const savedExp = localStorage.getItem("userExp");
            const current = JSON.parse(savedExp) || 0;
            localStorage.setItem("userExp", JSON.stringify(current + tasks[index].experience));
        };

        addExpfunction();

        setTasks((prevTasks) => {
            const updatedTasks = prevTasks.filter((_, i) => i !== index);
            localStorage.setItem("skillTasks", JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const openPopUp = () => setIsPopUpOpen(true);
    const closePopUp = () => setIsPopUpOpen(false);

    const taskPageStyle = {
        padding: "0px",
        margin: "0px",
        width: "100vh",
        height: "100vh",
    };

    const tasksStyle = {
        position: "relative",
        width: "60vh",
        height: "95vh",
        left: "30%",
        top: "5%",
    };

    return (
        <div style={taskPageStyle}>
            <div style={tasksStyle}>
                {tasks.map((task, index) => (
                    <TaskTemplate
                        key={index}
                        taskName={task.taskName}
                        taskColor={task.taskColor}
                        experience={task.experience}
                        complete={() => completeTask(index)}
                    />
                ))}
            </div>
            <PlusButton tap={openPopUp} />
            <PopUp show={isPopUpOpen} onClose={closePopUp} onSave={addTask} />
        </div>
    );
}

export default Tasks;