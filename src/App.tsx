import { useCallback, useState } from "react";
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
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
loadSlim;
const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );
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
      <div
        className=" w-full h-full  bg-white dark:bg-secondary-color
       dark:text-white overflow-y-auto scroll-smooth lg:scroll-p-16 snap-proximity snap-y"
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: { color: { value: "#202020bd" } },
            fullScreen: { zIndex: 0 },
            fps_limit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
            },
            particles: {
              color: { value: "#a7a7a79b" },
              links: {
                color: "#f92847",
                distance: 150,
                enable: false,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 7,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 15,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
          }}
        />
        {/* <button
          className="absolute z-30 bg-white text-primary-color dark:bg-primary-color dark:text-white w-1/4 border-2 m-0 border-black dark:border-white"
          onClick={() => setDarkToggle(!darkToggle)}
        >
          {darkToggle ? "ligth" : "dark"}
        </button> */}
        <Header className="dark:bg-primary-color bg-gray-light-gradiant z-10 dark:text-gray-light-gradiant" />
        <div className="h-[105%] sm:h-[130%] md:h-full w-full md:snap-start ">
          <Template className="h-full ">
            <Home className="h-full container mx-auto z-10" />
          </Template>
        </div>
        <div className="h-[100%] sm:h-[130%] md:h-full w-full dark:bg-secondary-color-gradiant snap-start">
          <Template className="h-full">
            <About className="h-full container mx-auto z-10" />
          </Template>
        </div>
        <Template className="h-full snap-center">
          <Skills className="h-full container mx-auto z-10" />
        </Template>
        <div className="h-full w-full  dark:bg-secondary-color-gradiant snap-center">
          <Template className="h-full w-full">
            <Tecnologies className="h-full container mx-auto z-10" />
          </Template>
        </div>
        <div className="md:h-[150%] lg:snap-start w-full p-2">
          <ShowProjects className=" container mx-auto z-10 " />
        </div>
        <Template className="w-full h-[80%]  sm:h-full dark:bg-secondary-color-gradiant snap-none">
          <Contact className="h-full container mx-auto z-10" />
        </Template>
        <Footer className=" md:h-[110px] " />
      </div>
    </motion.div>
  );
};

export default App;
