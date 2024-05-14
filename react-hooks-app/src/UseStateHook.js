import React, { useState } from "react";
import CComponent from "./CComponent";
import "./App.css";

// useState hook

function initialiValue() {
  console.log("intial value function called..");
  return 0;
}
function App() {
  const [name, setName] = useState("Deep");
  const [isShow, setIsShow] = useState(false);
  // const [count, setCount] = useState(0);
  //  its called only once when page is load ya at initialisation time.
  // const [count, setCount] = useState(() => {
  //   console.log("count ");
  //   return 0;
  // });
  const [count, setCount] = useState(initialiValue());
  const [userNames, setUserNames] = useState([]);

  function changeName() {
    return setIsShow(!isShow);
  }

  function increment() {
    setCount((prevState) => prevState + 1);
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function addNames(e) {
    console.log("clicked  ...");
    e.preventDefault();
    setUserNames([...userNames, { id: userNames.length, name }]);
    setName("");
  }
  return (
    <div className="App">
      <div>Hello, {isShow ? name : ""}</div>
      <button onClick={changeName}>Click Me</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add Name</button>
      </form>
      <hr></hr>
      <ul>
        {userNames.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

// export default App;
