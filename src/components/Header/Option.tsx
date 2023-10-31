import { motion } from "framer-motion";
import React, { useState } from "react";

interface OptionProps {
  className?: string;
  label: string;
  reference: string;
}
const Option = ({ className, label, reference }: OptionProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <motion.a
      href={reference}
      className={`${className} h-full relative flex items-center`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <motion.div
        whileHover={{ backgroundColor: "#393939" }}
        className="p-2 rounded-md hover:text-white"
      >
        <span>{label}</span>
      </motion.div>
      <motion.div
        className={`hidden md:flex absolute  h-1 bottom-0
         ${onHover && "w-full bg-red-400 rounded-md delay-300"}`}
      ></motion.div>
    </motion.a>
  );
};

export default Option;
