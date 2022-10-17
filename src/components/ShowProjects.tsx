import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cardAnimation } from "../animations/animation";
import { proyects } from "../data/proyect";
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
    <div className=" bg-emerald-200">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => toggleSelect(item)}
          className="border-2 rounded-md "
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}
      {selectedId && (
        <motion.div
          className="absolute flex justify-center items-center left-0 top-0 h-screen w-screen bg-[#00000066]"
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
              className="bg-white w-5/6 md:4/6 lg:w-1/3 rounded-popup "
            />
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default ShowProjects;
