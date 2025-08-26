import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>count={count}</h1>
      <button
        onClick={() => {
          const incrementCounter = count + 1;
          setCount(incrementCounter);
        }}
      >
        +1
      </button>
      <h2>Name:{name}</h2>
      <h3>Location:Erode</h3>
      <h3>Email:sadjasjdh@sdhfl.com</h3>
    </div>
  );
};

export default User;
