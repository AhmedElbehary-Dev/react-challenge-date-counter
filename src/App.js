import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setSteps] = useState(1);
  const [count, setCount] = useState(0);

  function getRelativeDate(offset = 0) {
    const date = new Date(); // Start with today's date
    date.setDate(date.getDate() + offset); // Adjust the date by the offset
    return date;
  }

  return (
    <>
      <div className="step-container">
        <button className="step-decrement" onClick={()=>{setSteps((s) => s - 1)}}>
          -
        </button>
        <span>{`Step: ${step}`}</span>
        <button className="step-increment" onClick={()=>{setSteps((s) => s + 1)}}>
          +
        </button>
      </div>
      <div className="count-container">
        <button
          className="count-decrement"
          onClick={()=>{setCount((c) => c - 1 * step)}}
        >
          -
        </button>
        <span>{`Count: ${count}`}</span>
        <button
          className="count-increment"
          onClick={()=>{setCount((c) => c + 1 * step)}}
        >
          +
        </button>
      </div>
      <div>
      <p>
          {count < 0
            ? `${Math.abs(count)} days ago was `
            : count === 0
            ? `Today is `
            : `${count} days from today is `}
          <span>{`${getRelativeDate(count).toDateString()}`}</span>
        </p>
      </div>
    </>
  );
}
