import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardAnimation } from "../animations/animation";
import { proyects } from "../data/proyect";
import { works } from "../data/works";
import CardLitleProject from "./Cards/CardLitleProject";
import CardProject, { dataProp } from "./Cards/CardProject";
import HtmlTool from "./Toolkits/HtmlTool";
import Template from "./Templates/Template";

interface ShowProjectsProps {
  className?: string;
}

const items = proyects;
const ShowProjects = ({ className }: ShowProjectsProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [proyect, setProyect] = useState<dataProp | null>(null);
  const toggleSelect = (item: dataProp) => {
    setSelectedId(item.id.toString());
    setProyect(item);
  };
  return (
    <section
      className={`${className} flex flex-col items-center justify-center pt-5 `}
      id="projects"
    >
      <h2 className=" text-subtitle font-chivo text-center font-bold sm:py-5">
        <HtmlTool tagHtml="<h2>" />
        Proyectos
        <HtmlTool tagHtml="</h2>" />
      </h2>
      <Template className="w-full py-5 sm:py-10">
        <section>
          <div className=" mx-auto">
            <div className="flex justify-center items-center px-2 ">
              {works.map((item) => (
                <CardLitleProject
                  data={item}
                  key={item.id}
                  // layoutId={item.id.toString()}
                  onClick={() => toggleSelect(item)}
                  className="h-full w-full "
                />
              ))}
            </div>
          </div>
        </section>
      </Template>
      <h2 className=" text-2xl font-chivo text-center font-bold sm:py-5">
        <HtmlTool tagHtml="<h2>" />
        Proyectos personales
        <HtmlTool tagHtml="</h2>" />
      </h2>
      <Template className="w-full h-full sm:pt-10">
        <section className=" w-full p-2 sm:py-5 lg:px-10">
          <div className="flex w-full sm:grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 overflow-x-auto overflow-y-hidden snap-x snap-mandatory md:snap-none">
            {items.map((item) => (
              <CardLitleProject
                data={item}
                key={item.id}
                // layoutId={item.id.toString()}
                onClick={() => toggleSelect(item)}
                className="h-full w-full "
              />
            ))}
          </div>
        </section>
      </Template>
      {selectedId && (
        <motion.div
          className="absolute flex justify-center items-center left-0 top-0 h-screen w-screen bg-[#00000066] z-10 overflow-hidden"
          onClick={() => setSelectedId(null)}
        >
          <AnimatePresence>
            <CardProject
              variants={cardAnimation}
              initial="hidden"
              animate="visible"
              exit="exit"
              data={proyect}
              key={proyect?.id}
              layoutId={proyect?.id.toString()}
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
