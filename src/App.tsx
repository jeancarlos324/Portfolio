import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShowProjects from "./components/ShowProjects";
import { motion, useScroll } from "framer-motion";
function App() {
  const [darkToggle, setDarkToggle] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={` h-screen w-screen
    ${darkToggle && "dark"} `}
    >
      <ShowProjects />
    </motion.div>
  );
}

export default App;
