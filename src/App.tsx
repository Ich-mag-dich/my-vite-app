import { useState } from "react";
import "./App.css";
import First from "./components/test";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="card">
        <h3>{count}</h3>
        <button
          onClick={() => {
            if (count < 9) {
              setCount((count) => count + 1);
            }
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount((count) => count - 1);
            }
          }}
        >
          -
        </button>
      </div>
      <First />
    </div>
  );
}

export default App;
