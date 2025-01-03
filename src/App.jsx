import ProfilePage from "./ProfilePage";
import NavigationBar from "./NavigationBar";
import Tasks from "./Tasks";
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
