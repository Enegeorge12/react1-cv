import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Helow world</h1>
      <button onClick={clickalert}>click me</button>
      
      </header>
    </div>
  );
}
function clickalert(){
  alert("mesaj")
}
export default App;
