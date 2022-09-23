import React from 'react';
import logo from './logo.svg';
import './styleApp.css';
import HeaderComponent from "./components/HeaderComponent"
import MainComponent from "./components/MainComponent"
import AboutComponent from "./components/AboutComponent"
import SkillsComponent from "./components/SkillsComponent"
import StudyComponent from "./components/StudyComponent"
import ProjectsMain from "./components/ProjectsMain"
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    
    <div>
      <HeaderComponent/>
      <MainComponent/>
      <AboutComponent/>
      <SkillsComponent/>
      <StudyComponent/>
      <ProjectsMain/>
      <FooterComponent/>
    </div>

  );
}

export default App;