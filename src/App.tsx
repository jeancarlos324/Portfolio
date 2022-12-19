import { useState } from "react";
import "./App.css";
import ShowProjects from "./components/ShowProjects";
import { motion, useScroll, useSpring } from "framer-motion";
import Skills from "./components/Skills";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/About/AboutMe";
const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);
  return (
    <motion.div
      className={`h-screen w-full relative overflow-y-hidden
      ${darkToggle && "dark"} font-manrope `}
    >
      <div className=" w-full h-full  bg-white dark:bg-secondary-color dark:text-white overflow-y-auto">
        {/* <button
          className="bg-white text-primary-color dark:bg-primary-color dark:text-white w-1/4 border-2 m-0 border-black dark:border-white"
          onClick={() => setDarkToggle(!darkToggle)}
        >
          {darkToggle ? "ligth" : "dark"}
        </button> */}
        <Header className="dark:bg-primary-color bg-gray-light-gradiant z-10 dark:text-gray-light-gradiant" />
        <AboutMe className="h-full container mx-auto" />
        {/* <div id="skills" className="h-full">
          ab
        </div>
        <div id="about" className="h-full">
          ac
        </div>
        <div id="proyects" className="h-full">
          az
        </div> */}
        <ShowProjects />
        <Footer className="h-1/3 md:h-[180px] " />
      </div>
      {/* <Skills /> */}
    </motion.div>
  );
};

export default App;
