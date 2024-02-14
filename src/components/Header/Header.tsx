import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/logo_dark.svg";
import Option from "./Option";
import { LanguajeType } from "../../types";

interface HeaderProps {
  className?: string;
  language: LanguajeType;
}

const menu = [
  { id: 1, name: "Inicio", ref: "#home" },
  { id: 2, name: "Sobre Mí", ref: "#aboutme" },
  { id: 3, name: "Habilidades", ref: "#skills" },
  { id: 4, name: "Tecnologías", ref: "#tecnologies" },
  { id: 5, name: "Proyectos", ref: "#projects" },
];

const menuEN = [
  { id: 1, name: "Home", ref: "#home" },
  { id: 2, name: "About me", ref: "#aboutme" },
  { id: 3, name: "Skills", ref: "#skills" },
  { id: 4, name: "Technologies", ref: "#tecnologies" },
  { id: 5, name: "Projects", ref: "#projects" },
];
const Header = ({ className, language }: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.header
      className={`sticky top-0 flex flex-col  w-full  ${className} justify-between items-center md:px-5  text-menu z-20`}
    >
      <div className="py-2 md:py-1  flex w-full md:h-16 items-center justify-between">
        <motion.div className=" flex md:h-full pl-5 items-center font-manrope ">
          <motion.a
            href="#home"
            initial={{ border: "1px" }}
            whileHover={{
              opacity: 0.9,
              transition: {
                duration: 0.3,
                delay: 0.1,
              },
            }}
          >
            <motion.img src={logo} alt="logo" className="max-h-10" />
          </motion.a>
        </motion.div>
        <div className="hidden md:flex items-center gap-10 h-full">
          <motion.div className="flex h-full w-full justify-center gap-4 font-victor ">
            {language === "ES"
              ? menu.map((option) => (
                  <Option
                    className=" relative "
                    key={option.id}
                    label={option.name}
                    reference={option.ref}
                  />
                ))
              : menuEN.map((option) => (
                  <Option
                    className=" relative "
                    key={option.id}
                    label={option.name}
                    reference={option.ref}
                  />
                ))}
          </motion.div>
          <motion.a
            href="#contact"
            className="bg-red-gradiant h-2/3 px-6 pt-2 rounded-md font-manrope font-bold"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {language === "ES" ? "Contactame" : "Contact_me"}
          </motion.a>
        </div>
        <motion.button
          className="block md:hidden pr-5"
          onClick={() => setIsActive(!isActive)}
        >
          <i className="fa-solid fa-bars text-2xl "></i>
        </motion.button>
      </div>
      <AnimatePresence>
        <motion.div
          style={{ zIndex: 10 }}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: isActive ? 240 : 0,
            transition: { duration: 0.4 },
          }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          className="absolute top-14 left-0 flex flex-col w-full  md:flex-row items-start md:gap-10 md:h-full bg-secondary-color-gradiant backdrop-opacity-20 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3 },
              display: isActive ? "inline" : "none",
            }}
            exit={{ opacity: 0 }}
            className=" h-1/5 w-full justify-center md:flex-row md:gap-10 font-victor "
          >
            {language === "ES"
              ? menu.map((option) => (
                  <Option
                    className=" py-2 pl-2 w-full hover:bg-red-gradiant"
                    key={option.id}
                    label={option.name}
                    reference={option.ref}
                  />
                ))
              : menuEN.map((option) => (
                  <Option
                    className=" py-2 pl-2 w-full hover:bg-red-gradiant"
                    key={option.id}
                    label={option.name}
                    reference={option.ref}
                  />
                ))}
            <motion.button
              animate={{
                opacity: 1,
                width: isActive ? "100%" : 0,
                display: isActive ? "flex" : "none",
                transition: { duration: 0.4 },
              }}
              exit={{ opacity: 0 }}
              whileTap={{ scale: 0.95 }}
              className="h-full px-5 py-2 flex justify-start items-center bg-red-gradiant rounded-md"
            >
              {language === "ES" ? "Contactame" : "Contact me"}
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
