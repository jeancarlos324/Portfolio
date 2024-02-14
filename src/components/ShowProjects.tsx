import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardAnimation } from "../animations/animation";
import { proyects } from "../data/proyect";
import { works } from "../data/works";
import CardLitleProject from "./Cards/CardLitleProject";
import CardProject, { dataProp } from "./Cards/CardProject";
import HtmlTool from "./Toolkits/HtmlTool";
import Template from "./Templates/Template";
import { LanguajeType } from "../types";

interface ShowProjectsProps {
  className?: string;
  language: LanguajeType;
}

const items = proyects;
const ShowProjects = ({ className, language }: ShowProjectsProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [proyect, setProyect] = useState<dataProp | null>(null);
  const toggleSelect = (item: dataProp) => {
    setSelectedId(item.id.toString());
    setProyect(item);
  };

  const handdleNavigate = () => {};

  return (
    <section
      className={`${className} flex flex-col items-center justify-center pt-5`}
      id="projects"
    >
      <h2 className=" text-subtitle font-chivo text-center font-bold py-5">
        <HtmlTool tagHtml="<h2>" />
        {language == "ES" ? "Proyectos" : "Projects"}
        <HtmlTool tagHtml="</h2>" />
      </h2>
      {/* 
      <h2 className=" text-2xl font-chivo text-center font-bold sm:py-5">
        <HtmlTool tagHtml="<h2>" />
        Proyectos personales
        <HtmlTool tagHtml="</h2>" />
      </h2> */}
      <section className="flex flex-wrap p-2 w-full gap-5 justify-center">
        {items.map((item) => (
          <CardLitleProject
            data={item}
            key={item.id}
            // layoutId={item.id.toString()}
            onClick={handdleNavigate}
            className=" "
          />
        ))}
      </section>
      {/* {selectedId && (
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
      )} */}
    </section>
  );
};

export default ShowProjects;
