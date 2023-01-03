import { motion } from "framer-motion";
interface Svgator {
  coords: number[];
}
export const SvgFramer = ({ coords }: Svgator) => {
  // const coords = [90, 85, 70, 60, 85];
  return (
    <motion.svg
      width="350"
      height="350"
      viewBox="-50 -50 600 600"
      initial="hidden"
      animate="visible"
      fill="#ffffff"
    >
      <motion.line
        x1="250"
        y1="50"
        x2="250"
        y2="250"
        strokeWidth={2}
        stroke="#ffffff33"
        strokeLinecap="round"
        custom={1}
      />
      <motion.line
        x1="450"
        y1="200"
        x2="250"
        y2="250"
        strokeWidth={2}
        stroke="#ffffff33"
        custom={5}
      />
      <motion.line
        x1="250"
        y1="250"
        x2="125"
        y2="450"
        strokeWidth={2}
        stroke="#ffffff33"
        custom={2}
      />
      <motion.line
        x1="375"
        y1="450"
        x2="250"
        y2="250"
        strokeWidth={2}
        stroke="#ffffff33"
        custom={4}
      />
      <motion.line
        x1="50"
        y1="200"
        x2="250"
        y2="250"
        strokeWidth={2}
        stroke="#ffffff33"
        custom={3}
      />
      <motion.polygon
        points="250,50 450,200 375,450 125,450 50,200"
        stroke="#f92847"
        fill="#00000000"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 4,
        }}
      />
      <motion.polygon
        points={`250,${250 - 2 * coords[0]}
        ${250 + 2 * coords[1]},${250 - coords[1] / 2}
        ${250 + coords[2] * 1.25},${250 + coords[2] * 2}
        ${250 - coords[3] * 1.25},${250 + coords[3] * 2}
        ${250 - coords[4] * 2},${250 - coords[4] / 2}`}
        stroke="#ffffff44"
        initial={{ pathLength: 0, fill: "#00000000" }}
        animate={{ pathLength: 1, fill: "#00000077" }}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 2,
        }}
      />
    </motion.svg>
  );
};
