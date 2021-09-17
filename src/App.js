import React from "react";
import "./App.css";

import { Counter } from "./components/Counter";
import { Button } from "./components/Button/Button";


function App() {
  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <Counter />
        <Counter />
        <Counter />
        </div>
    </div>
  );
}

export default App;


/*<Button
        text={"primary"}
        type={"primary"}
        onClick={() => alert("Primary")}
      />*/