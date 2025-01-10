import React, { useState } from "react";
import DivCircles from "../Components/DivCircles";
import Plus from "../assets/Plus";

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
            <Plus style={{ cursor: "pointer" }} />
        </div>
    );
}

function PopUp({ show, onClose, onSave }) {

    const [task, setTask] = useState("");
    const [selectedColor, setSelectedColor] = useState("#ffafcc");
    const [exp, setExp] = useState();

    const [circleStyleEasy, setCircleStyleEasy] = useState({
        position: "absolute",
        display: "inline-block",
        width: "10px",
        height: "10px",
        border: "1px solid #48CAE4",
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
        border: "1px solid #00B4D8",
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
        border: "1px solid #03045E",
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
        setSelectedColor("#ffafcc");
        onClose();
    };

    const handleColorChange = (index, color) => {

        let easy = false;
        let med = false;
        let hard = false;

        setCircleStyleEasy((c) => ({ ...c, backgroundColor: "white" }));
        setCircleStyleMed((c) => ({ ...c, backgroundColor: "white" }));
        setCircleStyleHard((c) => ({ ...c, backgroundColor: "white" }));

        setSelectedColor(color);

        if (index === 0 && med === false && hard === false) {
            setCircleStyleEasy((c) => ({ ...c, backgroundColor: color }));
            easy = true;
            setExp(100);
        } else if (index === 1 && easy === false && hard === false) {
            setCircleStyleMed((c) => ({ ...c, backgroundColor: color }));
            med = true;
            setExp(250);
        } else {
            setCircleStyleHard((c) => ({ ...c, backgroundColor: color }));
            hard = true;
            setExp(500);
        }
    };

    const popUpStyle = {
        position: 'absolute',
        width: '500px',
        height: '150px',
        backgroundColor: 'white',
        padding: '20px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
        overflow: 'auto',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        border: "1px solid black"
    };

    const closeButtonStyle = {
        position: "absolute",
        top: "3%",
        left: "1%",
        backgroundColor: "transparent",
        border: "none",
        fontWeigth: "900",
        fontSize: "16px",
        cursor: "pointer",
    };

    const saveButtonStyle = {
        position: "absolute",
        top: "76%",
        left: "87%",
        backgroundColor: "#0077B6",
        color: "#FFF",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        cursor: "pointer",
    };

    const textareaStyle = {
        flexGrow: 1,
        resize: 'none',
        width: '100%',
        height: 'auto',
        marginTop: "10px",
        marginBottom: '40px',
        boxSizing: 'border-box',
        border: 'none',
        outline: 'none',
        color: '#bde0fe',
    };


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

            <div style={circleStyleEasy} onClick={() => handleColorChange(0, "#00B4D8")}>

            </div>

            <div style={circleStyleMed} onClick={() => handleColorChange(1, "#00B4D8")}>

            </div>

            <div style={circleStyleHard} onClick={() => handleColorChange(2, "#03045E")}>

            </div>

            <button style={saveButtonStyle} onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

function TaskTemplate({ taskName, taskColor, complete, experience }) {

    const completeButton = {
        border: "1px solid black",
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
        paddingLeft: "10px",
        border: "1px solid black",
        marginBottom: "10px",
        borderRadius: "5px",
        display: "grid",
        gridTemplateColumns: "1fr 15fr",
        alignItems: "center",
        backgroundColor: "white",
    };

    const textStyle = {
        verticalAlign: "center",
        padding: "0",
        margin: "0",
        letterSpacing: "2px",
        color: "#bde0fe",
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
