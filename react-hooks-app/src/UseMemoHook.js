import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  /* 
  1. Optimize expensive operations
  2. Referential equality
 
  */
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const result = useMemo(() => {
    return factorial(count);
  }, [count]);

  return (
    <div className="App">
      <h1>
        Factorial of {count} is: <span>{result}</span>
      </h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <hr></hr>
      <div>
        <div>
          <label>Enter Name</label>
        </div>
        <input
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <p>{`My name is ${name}`}</p> */}
        <hr></hr>
        {/* 2nd use of useMemo */}
        <DisplayName name={name} />
      </div>
    </div>
  );
}

// const DisplayName = ({ name }) => {
//   console.log("rendered");
//   return <p>{`My name is ${name}`}</p>;
// };

const DisplayName = React.memo(({ name }) => {
  console.log("rendered");
  return <p>{`My name is ${name}`}</p>;
});

function factorial(n) {
  let i = 0;
  while (i < 20000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default App;
