import React, { useState, useEffect } from "react";

function FComponent() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Functional Component");

  const showDate = () => {
    setTime(new Date().toString());
  };

  useEffect(() => {
    console.log("Component Mounted or Updated");
    const interval = setInterval(showDate, 1000);
    return () => {
      console.log("clean up of interval");
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}>Show Date</button>
      <div>{message}</div>
      <button onClick={() => setMessage("Changes Functional Component")}>
        Change Message
      </button>
    </div>
  );
}

export default FComponent;
