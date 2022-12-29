import { motion, Variant } from "framer-motion";
import type { ReactNode } from "react";
import { imageAnimate } from "../../animations/animation";

interface TemplateProps {
  children: ReactNode;
  className?: string;
}

const Template = ({ className, children }: TemplateProps) => (
  <motion.div
    className={`${className}`}
    id={"2"}
    initial={"offscreen"}
    whileInView={"onscreen"}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ staggerChildren: 0.5 }}
  >
    <motion.div
      className="flex justify-center items-center w-full h-full"
      variants={imageAnimate}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default Template;
