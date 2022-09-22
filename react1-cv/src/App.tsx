import React from 'react';
import logo from './logo.svg';
import './styleApp.css';
import HeaderComponent from "./components/HeaderComponent"
import MainComponent from "./components/MainComponent"
import AboutComponent from "./components/AboutComponent"
import ProjectsMain from "./components/ProjectsMain"


function App() {
  return (
    
    <div>
      <HeaderComponent/>
      <MainComponent/>
      <AboutComponent/>
      <ProjectsMain/>
    </div>

  );
}

export default App;