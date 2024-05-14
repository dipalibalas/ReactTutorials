import React, { useState, useMemo, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  /* 
  1. Memoize the function (useCallback) vs Memoize the function the value(useMemo)
  2. Referential equality for functions
 
  */
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const result = useMemo(() => {
    return factorial(count);
  }, [count]);

  // const dispalyName = () => {
  //   return name;
  // };

  const dispalyName = useCallback(() => {
    return name;
  }, [name]);

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

        <DisplayName dispalyName={dispalyName} />
      </div>
    </div>
  );
}

// const DisplayName = ({ name }) => {
//   console.log("rendered");
//   return <p>{`My name is ${name}`}</p>;
// };

const DisplayName = ({ dispalyName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(dispalyName());
    console.log("component rendered!!");
  }, [dispalyName]);
  return <p>{`My name is ${value}`}</p>;
};

function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default App;
