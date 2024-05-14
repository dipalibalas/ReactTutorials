import React, { useState } from "react";
import "./App.css";
import CComponent from "./CComponent";
import FComponent from "./useEffectComponent/FComponent";

function App() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle Function Compoent</button>

        {/* <button onClick={() => setFlag(!flag)}>Toggle Class Compoent</button> */}
      </div>
      {/* {flag ? <CComponent /> : ""} */}
      {flag ? <FComponent /> : ""}
    </div>
  );
}

export default App;
