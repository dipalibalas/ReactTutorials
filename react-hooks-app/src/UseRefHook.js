import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  /* 
  1. DOM reference
  2. useRef for storing the previous state
  3. hold mutable value prevent re-render of component
  */
  const [name, setName] = useState("");
  const inputEle = useRef("");
  const [count, setCount] = useState(0);
  const prevCountRef = useRef("");

  console.log(inputEle);

  const resetInput = () => {
    setName("");
    inputEle.current.focuse(); // 1st use of useRef
    // inputEle.current.value = "deep"  // dont update the direct ref value
  };

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="App">
      <div>
        <input
          ref={inputEle}
          name="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetInput}>Reset</button>
      </div>
      <p>My name is{name}</p>
      <div>
        <h1>Random Counter: {count}</h1>
        {typeof prevCountRef.current !== "undefined" && (
          <h2>{prevCountRef.current}</h2>
        )}
        <button onClick={(e) => setCount(Math.ceil(Math.random() * 100))}>
          Generate Number
        </button>
      </div>
    </div>
  );
}

// export default App;
