import { useState } from "react";
import "./App.css";
import ShowProjects from "./components/ShowProjects";
import { motion } from "framer-motion";
import Skills from "./components/Skills";
const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);
  return (
    <motion.div
      className={`h-screen w-full overflow-y-auto
      ${darkToggle && "dark"}`}
    >
      <div className="h-full w-full bg-white dark:bg-primary-color dark:text-white">
        <button
          className="bg-white text-primary-color dark:bg-primary-color dark:text-white w-1/4 border-2 m-0 border-black dark:border-white"
          onClick={() => setDarkToggle(!darkToggle)}
        >
          {darkToggle ? "ligth" : "dark"}
        </button>
        {/* <Skills /> */}
        <ShowProjects />
      </div>
    </motion.div>
  );
};

export default App;
