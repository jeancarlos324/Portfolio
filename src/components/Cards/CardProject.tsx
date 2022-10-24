import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import CaroulselImages from "../Sliders/CaroulselImages";

type dataProp = { [key: string]: any };
interface CardProjectProps extends HTMLMotionProps<"div"> {
  data: dataProp;
  onClick?: () => void;
}

const CardProject = ({ data, onClick, ...otherProps }: CardProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div {...otherProps} onClick={(e) => e.stopPropagation()}>
      <div className="relative">
        <CaroulselImages
          images={data.images}
          className="rounded-t-popup"
          hImage="h-[40vh] "
        />

        <motion.div className="w-full h-1/2 px-6 py-3 flex flex-col gap-2">
          <div className="h-full flex flex-col gap-3">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <h2 className="text-title-card font-bold">{data.title}</h2>
                <motion.a
                  href={data.urlSite}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-litle-title-card italic opacity-70 capitalize font-semibold">
                    Visualizar proyecto
                    <i className="fa-solid fa-arrow-up-right-from-square px-1"></i>
                  </span>
                </motion.a>
              </div>
              <span className="text-subtitle-card italic">{data.subtitle}</span>
            </div>
            <div>
              <AnimatePresence>
                <motion.ul layout initial={{ borderRadius: 25 }}>
                  <motion.li
                    layout
                    onClick={toggleOpen}
                    initial={{ borderRadius: 10 }}
                  >
                    <motion.div className="font-semibold" layout>
                      Descripción:
                    </motion.div>
                    <AnimatePresence>
                      {isOpen ? (
                        <motion.div
                          layout
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="max-h-[80px] px-2 text-justify italic text-content-card  overflow-y-auto"
                        >
                          {data.description}
                        </motion.div>
                      ) : (
                        <div className="cursor-pointer">
                          <p className="truncate w-full text-justify italic text-content-card">
                            {data.description}
                          </p>
                          <span className="text-sky-500 italic cursor-pointer">
                            +ver más
                          </span>
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                </motion.ul>
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold">Herramientas y Tecnologias: </h3>
              <motion.div className="flex justify-around gap-5 items-center">
                {data.technologies.map((tecnologic: any) => (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    key={tecnologic.id}
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      className="h-[40px] w-[40px] "
                      src={tecnologic.image}
                      alt={tecnologic.title}
                    />
                    <span className="text-litle-title-card italic">
                      {tecnologic.title}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div className="flex gap-2 items-center">
              <h3 className="font-semibold text-litle-title-card italic">
                Tiempo estimado de desarrollo:
              </h3>
              <span className="text-litle-title-card italic">
                {data.duration}
              </span>
            </motion.div>
          </div>
        </motion.div>
        <motion.button
          className="absolute right-2 top-2"
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
          whileHover={{ scale: 1.2, rotate: 90 }}
          type="button"
          onClick={onClick}
        >
          <i className="fa-solid fa-circle-xmark text-white text-3xl"></i>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CardProject;
