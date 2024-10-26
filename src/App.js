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
  function handleStepIncrement() {
    setSteps((s) => s + 1);
  }
  function handleStepDecrement() {
    setSteps((s) => s - 1);
  }
  function handleCountIncrement() {
    setCount((c) => c + 1 * step);
  }
  function handleCountDecrement() {
    setCount((c) => c - 1 * step);
  }

  return (
    <>
      <div className="step-container">
        <button className="step-decrement" onClick={handleStepDecrement}>
          -
        </button>
        <span>{`Step: ${step}`}</span>
        <button className="step-increment" onClick={handleStepIncrement}>
          +
        </button>
      </div>
      <div className="count-container">
        <button className="count-decrement" onClick={handleCountDecrement}>
          -
        </button>
        <span>{`Count: ${count}`}</span>
        <button className="count-increment" onClick={handleCountIncrement}>
          +
        </button>
      </div>
      <div>
        <p>
          {count < 0
            ? `${Math.abs(count)} days ago was ${getRelativeDate(
                count
              ).toDateString()}`
            : count === 0
            ? `Today is ${getRelativeDate(count).toDateString()}`
            : `${count} days from today is ${getRelativeDate(
                count
              ).toDateString()}`}
        </p>
      </div>
    </>
  );
}
