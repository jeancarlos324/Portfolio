import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import HtmlTool from "../Toolkits/HtmlTool";
import aboutme from "../../assets/aboutme.svg";
import Template from "../Templates/Template";
import { LanguajeType } from "../../types";
interface AboutProps {
  className: string;
  language: LanguajeType;
}

const About = ({ className, language }: AboutProps) => {
  return (
    <section
      id="aboutme"
      className={`${className} flex flex-col-reverse lg:flex-row pt-10`}
    >
      <motion.div className="w-full md:w-2/5 md:m-auto lg:w-1/2 flex justify-center items-center animation-card ">
        <img
          className="md:w-full md:h-full px-5 sm:h-3/5 sm:w-3/5"
          src={aboutme}
          alt="home"
        />
      </motion.div>
      <div className="w-full  lg:w-1/2 flex  flex-col  gap-2 sm:gap-5 md:my-auto md:px-10 ">
        <h2 className="text-title-card font-chivo text-center md:text-left font-bold ">
          <HtmlTool tagHtml="<h2>" />
          {language === "ES" ? "¿Quién soy?" : "Who I am?"}

          <HtmlTool tagHtml="</h2>" />
        </h2>
        <div className="text-justify text-sm px-5 sm:p-5">
          <HtmlTool tagHtml="<p>" />
          <p className="md:pl-10 pb-2">
            {language === "ES"
              ? " Soy desarrollador web full-stack y bachiller en Ingeniería de Sistemas, apasionado por la programación, proactivo y listo para enfrentarme a nuevos retos."
              : " I am a full-stack web developer and a bachelor's degree holder in Systems Engineering, passionate about programming, proactive, and ready to tackle new challenges."}
          </p>
          <p className="md:pl-10 pb-2">
            {language === "ES"
              ? "Tengo experiencia en desarrollo web front-end y back-end, también con entornos de desarrollo fullstack como Remix.run, a su vez con despliegue de aplicaciones con Docker."
              : "I have experience in front-end and back-end web development, as well as with full-stack development environments like Remix.run, along with deploying applications using Docker."}
          </p>
          <p className="md:pl-10">
            {language === "ES"
              ? "Actualmente he desarrollado proyectos de pequeña a mediana escala, con Tecnologias como ReactJs, NodeJs, Express, Bases de Datos(Postgres, MongoDB, MySQL), etc"
              : "Currently, I have worked on projects ranging from small to medium scale, utilizing technologies such as ReactJs, NodeJs, Express, databases (Postgres, MongoDB, MySQL), etc"}
          </p>
          <HtmlTool tagHtml="</p>" />
        </div>
        <div>
          <h3 className="text-title-card font-chivo text-center md:text-left font-bold">
            <HtmlTool tagHtml="<h2>" />
            {language === "ES" ? "Certificados" : "Certifications"}
            <HtmlTool tagHtml="</h2>" />
          </h3>
          <div className="grid grid-cols-2 gap-3 md:gap-0 p-4 sm:p-3 md:flex  md:justify-around py-3">
            <a
              className="font-manrope"
              href="https://certificates.academlo.com/en/verify/87263623826263"
              target={"_blank"}
            >
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="border-2 border-red-gradiant px-5 rounded-md h-[30px] "
              >
                {language === "ES" ? "Fundamentos" : "Fundaments"}
              </motion.button>
            </a>
            <a
              href="https://certificates.academlo.com/en/verify/83641197619216"
              target={"_blank"}
            >
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="border-2 border-red-gradiant px-5 rounded-md font-manrope h-[30px] "
              >
                Front-End
              </motion.button>
            </a>
            <a
              href="https://certificates.academlo.com/en/verify/70391387466256"
              target={"_blank"}
            >
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="border-2 border-red-gradiant px-5 rounded-md font-manrope h-[30px] "
              >
                Back-End
              </motion.button>
            </a>
            <a
              href="https://certificates.academlo.com/en/verify/84723560875027"
              target={"_blank"}
            >
              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="border-2 border-red-gradiant px-5 rounded-md font-manrope h-[30px] "
              >
                Full-Stack
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
