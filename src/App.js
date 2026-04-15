import React from "react";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">🎓 My Profile Card</h1>

      <ProfileCard />

      {/* <Projects /> */}
    </div>
  );
}

export default App;