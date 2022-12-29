import React, { useState } from "react";
import CaroulselImages from "../Sliders/CaroulselImages";
import CarouselMultiple from "../Sliders/CarouselMultiple";
import HtmlTool from "../Toolkits/HtmlTool";
import { motion } from "framer-motion";
import { backEnd, frontEnd } from "../../data/tecnologies";
interface TecnologiesProps {
  className?: string;
}
const Tecnologies = ({ className }: TecnologiesProps) => {
  const [options, setOptions] = useState("Front");

  return (
    <section
      className={`${className} flex flex-col items-center justify-center gap-5  px-5 py-10`}
    >
      <h2 className="text-subtitle font-chivo text-center font-bold">
        <HtmlTool tagHtml="<h2>" />
        Tecnologías
        <HtmlTool tagHtml="</h2>" />
      </h2>
      <div className=" flex justify-center border rounded-md dark:border-white">
        <motion.button
          onClick={() => setOptions("Front")}
          className="p-2 rounded-l-md"
          animate={{
            backgroundColor: options === "Front" ? "#f92847" : "#00000000",
          }}
        >
          Front-End
        </motion.button>
        <motion.button
          animate={{
            backgroundColor: options === "Back" ? "#f92847" : "#00000000",
          }}
          className="p-2 rounded-r-md"
          onClick={() => setOptions("Back")}
        >
          Back-End
        </motion.button>
      </div>
      <div className="md:w-4/5 container h-[200px]">
        {options === "Front" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <CarouselMultiple
              data={frontEnd}
              itemKey="id"
              labelField="image"
              className="h-[300px] "
            />
          </motion.div>
        )}
        {options === "Back" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              x: { duration: 1 },
              default: { ease: "linear" },
            }}
          >
            <CarouselMultiple
              data={backEnd}
              itemKey="id"
              labelField="image"
              className="h-[300px] "
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Tecnologies;
