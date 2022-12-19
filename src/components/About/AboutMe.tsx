import { motion } from "framer-motion";
import React from "react";
interface AboutMeProp {
  className?: string;
}

const AboutMe = ({ className }: AboutMeProp) => {
  return (
    <section className={`${className} flex flex-col md:flex-row `}>
      <div className="w-full md:w-1/2 flex flex-col gap-5 my-auto p-5">
        <h1 className="text-title py-3 flex flex-col gap-5 font-manrope font-bold text-center md:text-left">
          <span className="text-3xl font-chivo">¡Hola! Soy</span> Jean Ticona
        </h1>
        <h2 className="text-title-card font-chivo text-center md:text-left">Full-Stack Web Developer</h2>
        <p className="text-justify">
          Entusiasta de la programación, autodidacta y en constante crecimiento.
          Me gustan los retos y como sobrellevarlos con los recursos que la
          tecnología ofrece, adaptandome y retroalimentando mis habilidades.
        </p>
        <div className="w-full flex justify-around">
          <motion.button>Contactar</motion.button>
          <motion.button>Descargar CV</motion.button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default AboutMe;
