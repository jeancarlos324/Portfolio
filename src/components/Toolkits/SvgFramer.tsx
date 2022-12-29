import { motion } from "framer-motion";
import React from "react";
export const SvgFramer = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 2 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.03 },
        },
      };
    },
  };
  const draw2 = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 6 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 0,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
          opacity: { delay, duration: 0.3 },
        },
        fill: "#ffffff44",
      };
    },
  };

  const coords = [90, 20, 40, 60, 50];
  return (
    <motion.svg
      className="border border-yellow-300"
      width="300"
      height="300"
      viewBox="0 0 500 500"
      initial="hidden"
      animate="visible"
      fill="#ffffff"
    >
      <motion.line
        x1="250"
        y1="50"
        x2="250"
        y2="250"
        stroke="#00cc88"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="450"
        y1="200"
        x2="250"
        y2="250"
        stroke="#00cc88"
        variants={draw}
        custom={5}
      />
      <motion.line
        x1="250"
        y1="250"
        x2="125"
        y2="450"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="375"
        y1="450"
        x2="250"
        y2="250"
        stroke="#00cc88"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="50"
        y1="200"
        x2="250"
        y2="250"
        stroke="#00cc88"
        variants={draw}
        custom={3}
      />
      <motion.polygon
        points="250,50 450,200 375,450 125,450 50,200"
        stroke="#ff00ff"
        fill="#00000000"
        variants={draw}
        custom={7}
      />
      <motion.polygon
        points={`250,${250 - 2 * coords[0]}
        ${250 + 2 * coords[1]},${250 - coords[1] / 2}
        ${250 + coords[2] * 1.25},${250 + coords[2] * 2}
        ${250 - coords[3] * 1.25},${250 + coords[3] * 2}
        ${250 - coords[4] * 2},${250 - coords[4] / 2}`}
        stroke="#ffffff44"
        fill="#00000000"
        variants={draw2}
        custom={1}
      />
      <motion.text
        x="200"
        y="30"
        className="small font-manrope"
        variants={draw}
        custom={6}
      >
        This is a test
      </motion.text>
    </motion.svg>
  );
};
