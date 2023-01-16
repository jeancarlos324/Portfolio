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
  return (
    <div
      className="mx-auto"
      // className="
      // h-[220px] md:h-full   lg:w-5/6 mx-auto flex justify-center items-center backdrop-blur-md bg-[#ffffff11] rounded-2xl
      // "
    >
      <motion.div
        className={`${className} h-full body-container flex justify-center items-center`}
        {...otherProps}
      >
        <motion.div className=" card relative rounded-xl min-w-[320px] h-[230px] sm:h-full sm:w-full ">
          <motion.img src={data.images[3].image} className="h-[280px] w-full my-auto" />
          <div className="contentBx flex flex-col items-center gap-1 md:gap-4 ">
            <h2 className="font-bold font-chivo text-xl lg:text-3xl px-1">
              {data.title}
            </h2>
            <div className="size justify-center">
              <span className="w-5/6 text-sm">{data.subtitle} </span>
            </div>
            <div className="size justify-around w-full">
              {data.technologies.map((technologic: any) => (
                <div
                  key={technologic.id}
                  className="min-h-[35px] min-w-[35px] max-h-[45px] max-w-[45px]  "
                >
                  <img src={technologic.image} className="h-full w-full " />
                </div>
              ))}
            </div>
            <div className="cursor-pointer text-sm ">
              {`> Click para ver más <`}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardLitleProject;
