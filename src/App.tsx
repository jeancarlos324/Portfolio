import { useState } from "react";
import "./App.css";
import ShowProjects from "./components/ShowProjects";
import { motion, useScroll, useSpring } from "framer-motion";
import Skills from "./components/Skills";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import Contact from "./components/Contacts/Contact";
const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);
  return (
    <motion.div
      // animate={{
      //   backgroundColor: `rgb(${darkToggle ? 0 : 255}, ${
      //     darkToggle ? 0 : 255
      //   }, ${darkToggle ? 0 : 255})`,
      //   color: `rgb(${darkToggle ? 255 : 0}, ${darkToggle ? 255 : 0}, ${
      //     darkToggle ? 255 : 0
      //   })`,

      //   opacity: 1,
      //   transition: {
      //     delay: 0.2,
      //     duration: 0.3,
      //   },
      // }}
      className={`h-screen w-full relative overflow-y-hidden
      ${darkToggle && "dark"} font-manrope `}
    >
      <div className=" w-full h-full  bg-white dark:bg-secondary-color dark:text-white overflow-y-auto scroll-smooth">
        <button
          className="absolute z-30 bg-white text-primary-color dark:bg-primary-color dark:text-white w-1/4 border-2 m-0 border-black dark:border-white"
          onClick={() => setDarkToggle(!darkToggle)}
        >
          {darkToggle ? "ligth" : "dark"}
        </button>
        <Header className="dark:bg-primary-color bg-gray-light-gradiant z-10 dark:text-gray-light-gradiant" />
        <div className="w-full">
          <Home className="h-full container mx-auto" />
        </div>
        <div className="w-full dark:bg-secondary-color-gradiant">
          <About className="h-full container mx-auto" />
        </div>
        <Tecnologies className="h-2/3 container mx-auto" />
        {/* <ShowProjects className="h-[120%] container mx-auto dark:bg-secondary-color-gradiant" /> */}
        <Contact className="h-full container mx-auto"/>
        <Footer className="h-1/3 md:h-[110px] " />
      </div>
      {/* <Skills /> */}
    </motion.div>
  );
};

export default App;
