import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardAnimation } from "../animations/animation";
import { proyects } from "../data/proyect";
import CardLitleProject from "./Cards/CardLitleProject";
import CardProject from "./Cards/CardProject";
import HtmlTool from "./Toolkits/HtmlTool";

interface ShowProjectsProps {
  className?: string;
}

const items = proyects;
const ShowProjects = ({ className }: ShowProjectsProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [proyect, setProyect] = useState<{ [key: string]: any }>({});
  const [options, setOptions] = useState<boolean>(false);
  const toggleSelect = (item: { [key: string]: any }) => {
    setSelectedId(item.id.toString());
    setProyect(item);
  };
  return (
    <section
      className={`${className} flex flex-col items-center justify-center pt-20 `}
      id="projects"
    >
      <h2 className=" text-subtitle font-chivo text-center font-bold py-5">
        <HtmlTool tagHtml="<h2>" />
        Proyectos
        <HtmlTool tagHtml="</h2>" />
      </h2>
      {/* <div className=" flex  w-1/4 justify-center border rounded-md dark:border-white">
        <motion.button
          onClick={() => setOptions(false)}
          className="w-1/2 p-2 rounded-l-md"
          animate={{
            backgroundColor: options === false ? "#f92847" : "#00000000",
          }}
        >
          Proyectos
        </motion.button>
        <motion.button
          animate={{
            backgroundColor: options === true ? "#f92847" : "#00000000",
          }}
          className="w-1/2 p-2 rounded-r-md"
          onClick={() => setOptions(true)}
        >
          Proyectos Personales
        </motion.button>
      </div> */}
      <div className=" w-full p-2 py-5 lg:px-20 ">
        <div className="flex w-full sm:grid lg:grid-cols-2 gap-10 md:gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
          {items.map((item) => (
            <CardLitleProject
              data={item}
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => toggleSelect(item)}
              className="h-full w-full "
            />
          ))}
        </div>
      </div>
      {selectedId && (
        <motion.div
          className="absolute flex justify-center items-center left-0 top-0 h-screen w-screen bg-[#00000066] z-10"
          onClick={() => setSelectedId(null)}
        >
          <AnimatePresence>
            <CardProject
              variants={cardAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              data={proyect}
              key={proyect.id}
              layoutId={proyect.id.toString()}
              onClick={() => setSelectedId(null)}
              className="bg-white dark:bg-primary-color dark:text-white w-5/6 md:w-4/6 lg:w-2/5 rounded-popup  overflow-hidden"
            />
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};

export default ShowProjects;
