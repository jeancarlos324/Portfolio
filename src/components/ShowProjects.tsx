import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardAnimation } from "../animations/animation";
import { proyects } from "../data/proyect";
import CardLitleProject from "./Cards/CardLitleProject";
import CardProject from "./Cards/CardProject";

const items = proyects;
const ShowProjects = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [proyect, setProyect] = useState<{ [key: string]: any }>({});
  const toggleSelect = (item: { [key: string]: any }) => {
    setSelectedId(item.id.toString());
    setProyect(item);
  };
  return (
    <div className="flex flex-col h-[90%] w-full items-center ">
      <div className="grow w-full lg:w-5/6  py-5 lg:px-20 ">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item) => (
            <CardLitleProject
              data={item}
              key={item.id}
              layoutId={item.id.toString()}
              onClick={() => toggleSelect(item)}
              className="h-full w-full"
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
    </div>
  );
};

export default ShowProjects;
