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
    <motion.div
      // className={`${className}  body-container flex justify-center items-center`}
      className={`${className} h-[18rem] min-w-[30%] flex justify-center items-center body-container`}
      {...otherProps}
    >
      <motion.div className=" card relative rounded-md h-full w-full sm:h-full sm:w-full ">
        <motion.img
          src={data.images[3].image}
          className="h-full w-full my-auto"
        />
        <div className="contentBx flex flex-col items-center gap-1 md:gap-4 ">
          <h2 className="font-bold font-mono text-xl lg:text-3xl px-1 ">
            {data.title}
          </h2>
          <div className="size justify-center">
            <span className="w-5/6 text-sm font-mono">{data.subtitle} </span>
          </div>
          <div className="size justify-around w-full">
            {data.technologies.map((technologic: any) => (
              <div
                key={technologic.id}
                className="min-h-[35px] min-w-[35px] max-h-[45px] max-w-[45px]  "
              >
                <img
                  src={technologic.image}
                  className="h-full w-full hover:scale-110 duration-300 hover:drop-shadow-normal"
                />
              </div>
            ))}
          </div>
          <div className="cursor-pointer text-sm flex  w-4/5 align-middle justify-between ">
            <a
              href={data.urlSite}
              className="bg-red-500  p-2"
              target={"_blank"}
            >
              Show Project
            </a>
            <a
              href={data.urlRepo}
              className="bg-red-500  p-2"
              target={"_blank"}
            >
              Show Repository
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardLitleProject;
