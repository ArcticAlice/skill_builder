import ProfilePage from "./Pages/ProfilePage";
import NavigationBar from "./CentralComponents/NavigationBar";
import Tasks from "./Pages/TaskPage";
import React, { useState } from "react";
import "./index.css";

function App() {
  const [display, setDisplay] = useState(true); 

  return (
    <>
      <NavigationBar changeDisplay={setDisplay} />
      {display ? <ProfilePage /> : <Tasks />}
    </>
  );
}

export default App;
