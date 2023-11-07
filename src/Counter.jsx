import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [counter]);

  return <h1>{counter}</h1>;
};

export default Counter;
