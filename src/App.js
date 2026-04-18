import React from "react";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import "./App.css";
import About from "./components/about";
import Header from "./components/header";
import Education from "./components/education";
import Experience from "./components/experience";


function App() {
  return (
    <div className="app">
       <Header /> 

     <div className="profile-about-container">
       <ProfileCard />
       <About />
     </div>
        <div className="education-experience-container">
          <Education/>
          <Experience/>
        </div>
        
      <Skills />

       <Projects /> 
    </div>
  );
}

export default App;
