import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  return (
    <motion.header className="w-full flex justify-between items-center p-5 bg-primary-color text-white font-victor">
      <motion.div>
        <a href="#">
          <img src="" alt="logo" />
        </a>
      </motion.div>
      <motion.ul className="flex bg-red-400 font-victor">
        <motion.li>Home</motion.li>
        <motion.li>Sobre Mí</motion.li>
        <motion.li>Habilidades</motion.li>
        <motion.li>Proyectos</motion.li>
      </motion.ul>
      <motion.button>Contacto</motion.button>
    </motion.header>
  );
};

export default Header;
