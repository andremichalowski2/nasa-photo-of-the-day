import React from "react";
import "./App.css";

import ContainerEarth from './Components/ContainerEarth';
import ContainerMars from './Components/ContainerMars.js';

function App() {
  return (
    <div className="App">
      <ContainerEarth />
      {/* <ContainerMars /> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
