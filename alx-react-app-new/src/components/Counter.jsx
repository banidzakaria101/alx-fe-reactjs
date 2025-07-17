import { useState } from "react";

import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '24px', margin: '20px 0' }}>Current Cunt {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 20px'}}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 20px'}}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px 20px'}}>Reset</button>
    </div>
  )
}

export default Counter;
