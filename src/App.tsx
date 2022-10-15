import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div
      className={` h-screen w-full bg-primary-color
    ${darkToggle && "dark"} `}
    >
      <label className="toggleDarkBtn bg-se ">
        <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
        <span className="slideBtnTg round"></span>
      </label>
      <div className="dark:bg-emerald-50 bg-red-400"></div>
      <span className=" whitespace-nowrap text-white text-3xl  logo ">
        <span className="text-[#F92847] ">{"("}</span>
        <span className="text-[#2190FF] ">{"{"}</span>
        <span>{"Jean"}</span>
        <span>{":"}</span>
        <span>{"Dev"}</span>
        <span className="text-[#2190FF]">{"}"}</span>
        <span className="text-[#F92847] ">{")"}</span>
      </span>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
