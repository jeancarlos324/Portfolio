import { useState } from "react";
import "./App.css";
import ShowProjects from "./components/ShowProjects";
import { motion, useScroll, useSpring, Variant } from "framer-motion";
import Skills from "./components/Skills";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Tecnologies from "./components/Tecnologies/Tecnologies";
import Contact from "./components/Contacts/Contact";
import { imageAnimate } from "./animations/animation";
import Template from "./components/Templates/Template";
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
      <div className=" w-full h-full  bg-white dark:bg-secondary-color dark:text-white overflow-y-auto scroll-smooth scroll-m-10 snap-y">
        {/* <button
          className="absolute z-30 bg-white text-primary-color dark:bg-primary-color dark:text-white w-1/4 border-2 m-0 border-black dark:border-white"
          onClick={() => setDarkToggle(!darkToggle)}
        >
          {darkToggle ? "ligth" : "dark"}
        </button> */}
        <Header className="dark:bg-primary-color bg-gray-light-gradiant z-10 dark:text-gray-light-gradiant" />
        <div className="h-[105%] sm:h-[130%] md:h-full w-full">
          <Template className="h-full">
            <Home className="h-full container mx-auto" />
          </Template>
        </div>
        <div className="h-[110%] sm:h-[130%] md:h-full w-full dark:bg-secondary-color-gradiant">
          <Template className="h-full">
            <About className="h-full container mx-auto" />
          </Template>
        </div>
        <Template className="h-full md:h-4/5">
          <Tecnologies className="h-full container mx-auto" />
        </Template>
        <div className="h-full w-full dark:bg-secondary-color-gradiant">
          <Skills className="h-full container mx-auto" />
        </div>
        <Template className="w-full h-[120%]">
          <ShowProjects className="md:h-[120%] sm:h-[250%] container mx-auto dark:bg-secondary-color-gradiant" />
        </Template>
        <Template className="w-full h-[85%]  sm:h-full">
          <Contact className="h-full container mx-auto" />
        </Template>
        <Footer className=" md:h-[110px] " />
      </div>
    </motion.div>
  );
};

export default App;
