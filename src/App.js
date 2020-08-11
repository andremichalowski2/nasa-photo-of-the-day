import React from "react";
import "./App.css";

import ContainerEarth from './Components/ContainerEarth';
import ContainerMars from './Components/ContainerMars.js';

function App() {
  return (
    <div className="App">
      <ContainerEarth />
      <ContainerMars />
    </div>
  );
}

export default App;
