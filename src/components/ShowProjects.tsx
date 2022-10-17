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
    <div className="w-full">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item) => (
          <CardLitleProject
            data={item}
            key={item.id}
            layoutId={item.id.toString()}
            onClick={() => toggleSelect(item)}
            className=" w-2/3 p-3"
          />
        ))}
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
              className="max-h-[90%] bg-white w-5/6 md:w-4/6 lg:w-2/5 rounded-popup  overflow-hidden"
            />
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default ShowProjects;
