import { motion } from "framer-motion";
import HtmlTool from "../Toolkits/HtmlTool";
import home from "../../assets/home.svg";
import "./home.css";
import { useEffect, useState } from "react";
import { LanguajeType } from "../../types";
interface HomeProp {
  className?: string;
  language: LanguajeType;
}

const Home = ({ className, language }: HomeProp) => {
  return (
    <section
      id="home"
      className={`${className} flex flex-col-reverse md:flex-row`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
        className="w-full md:w-3/5 lg:w-1/2 flex  flex-col gap-5 md:my-auto p-5 md:px-10"
      >
        <h1 className="text-title py-5 md:pl-10 flex flex-col gap-5 font-manrope font-bold text-center md:text-left">
          <span className="text-3xl font-chivo">
            {language === "ES" ? "¡Hola! Soy" : "Hi! I'm"}
          </span>{" "}
          Jean Ticona
        </h1>
        <h2 className="text-title-card font-chivo text-center md:text-left font-bold">
          <HtmlTool tagHtml="<h2>" />
          Full-Stack Web Developer
          <HtmlTool tagHtml="</h2>" />
        </h2>
        <div className="text-justify ">
          <HtmlTool tagHtml="<p>" />
          <p className="md:pl-10">
            {language === "ES"
              ? "Entusiasta de la programación, autodidacta y en constante crecimiento. Me gustan los retos y como sobrellevarlos con los recursos que la tecnología ofrece, adaptandome y retroalimentando mis habilidades."
              : "Programmer, self-taught, and in constant growth. I enjoy challenges and how to overcome them with the resources that technology offers, adapting and continually enhancing my skills."}
          </p>
          <HtmlTool tagHtml="</p>" />
        </div>
        <div className="w-full flex gap-5 md:justify-around ">
          <a href="/Jean Carlos Ticona Gutierrez CV.pdf" target={"_blank"}>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              className="border-2 border-red-gradiant p-3 rounded-xl font-manrope font-bold text-menu"
            >
              {language === "ES"
                ? "Descargar CV (Español)"
                : "Dowload Resume (Spanish)"}
            </motion.button>
          </a>
          <a href="/Resume.pdf" target={"_blank"}>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              className="border-2 border-red-gradiant p-3 rounded-xl font-manrope font-bold text-menu"
            >
              {language === "ES"
                ? "Descargar CV (Ingles)"
                : "Dowload Resume (English)"}
            </motion.button>
          </a>
          <a href="#contact">
            <motion.button
              type="button"
              className="bg-red-gradiant p-3 px-6 rounded-xl font-manrope font-bold text-menu"
            >
              {language === "ES" ? "Contactar" : "Contact"}
            </motion.button>
          </a>
        </div>
      </motion.div>
      <motion.div className="w-full  md:w-2/5 lg:w-1/2 flex justify-center items-center animation-card">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
          className="sm:w-4/5 sm:h-4/5  md:w-full md:h-full p-5"
          src={home}
          alt="home"
        />
      </motion.div>
    </section>
  );
};

export default Home;
