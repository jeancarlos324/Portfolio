import React, { useState } from "react";
import CaroulselImages from "../Sliders/CaroulselImages";
import CarouselMultiple from "../Sliders/CarouselMultiple";
import HtmlTool from "../Toolkits/HtmlTool";
import { motion } from "framer-motion";
import { backEnd, frontEnd } from "../../data/tecnologies";
import { LanguajeType } from "../../types";
interface TecnologiesProps {
  className?: string;
  language: LanguajeType;
}
const Tecnologies = ({ className, language }: TecnologiesProps) => {
  const [options, setOptions] = useState("Front");

  return (
    <section
      className={`${className} flex flex-col items-center justify-center gap-10  px-5 py-10`}
      id="tecnologies"
    >
      <h2 className="text-subtitle font-chivo text-center font-bold sm:pb-5">
        <HtmlTool tagHtml="<h2>" />

        {language === "ES" ? "Tecnologías" : "Technologies"}
        <HtmlTool tagHtml="</h2>" />
      </h2>
      <motion.button
        onClick={() => setOptions("Front")}
        className="p-2 rounded-md"
        animate={{
          backgroundColor: options === "Front" ? "#f92847" : "#00000000",
        }}
      >
        Front-End
      </motion.button>
      <div className="md:w-4/5 container h-[200px]">
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
            className="h-[200px] "
          />
        </motion.div>
      </div>
      <motion.button
        className="p-2 rounded-md"
        animate={{
          backgroundColor: options === "Front" ? "#f92847" : "#00000000",
        }}
        onClick={() => setOptions("Back")}
      >
        Back-End
      </motion.button>
      <div className="md:w-4/5 container h-[200px] ">
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
      </div>
    </section>
  );
};

export default Tecnologies;
