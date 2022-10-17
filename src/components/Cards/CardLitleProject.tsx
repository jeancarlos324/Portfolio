import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import CaroulselImages from "../Sliders/CaroulselImages";

import "../Cards/CardLitle.css";
type dataProp = { [key: string]: any };
interface CardProjectProps extends HTMLMotionProps<"div"> {
  data: dataProp;
  className: string;
}
const CardLitleProject = ({
  data,
  className,
  ...otherProps
}: CardProjectProps) => {
  console.log(data);
  return (
    <div className=" flex justify-center items-center">
      <motion.div
        className={`${className} h-full body-container`}
        {...otherProps}
      >
        <motion.div className="card relative ">
          <img src={data.images[0].image} className="h-full" />
          <div className="contentBx flex flex-col items-center gap-4">
            <h2 className="uppercase font-bold text-3xl px-1">{data.title} </h2>
            <div className="size justify-center">
              <span className="w-5/6">{data.subtitle} </span>
            </div>
            <div className="size justify-around w-full">
              {data.technologies.map((technologic: any) => (
                <div key={technologic.id} className="h-[40px] w-[40px]  ">
                  <img src={technologic.image} className="h-full w-full " />
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className=" bg-white rounded-popup p-1 text-primary-color"
            >
              Ver mas
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardLitleProject;
