import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import HtmlTool from "../Toolkits/HtmlTool";
import aboutme from "../../assets/aboutme.svg";
interface AboutProps {
  className: string;
}

const About = ({ className }: AboutProps) => {
  return (
    <section
      id="aboutme"
      className={`${className} flex flex-col-reverse md:flex-row pt-10`}
    >
      <motion.div className="w-full md:w-1/2 flex justify-center items-center animation-card">
        <img className="md:w-full md:h-full p-5" src={aboutme} alt="home" />
      </motion.div>
      <div className="w-full md:w-1/2 flex  flex-col gap-5 md:my-auto md:px-10">
        <h2 className="text-title-card font-chivo text-center md:text-left font-bold pt-10">
          <HtmlTool tagHtml="<h2>" />
          ¿Quién soy?
          <HtmlTool tagHtml="</h2>" />
        </h2>
        <div className="text-justify p-5">
          <HtmlTool tagHtml="<p>" />
          <p className="md:pl-10 pb-2">
            Soy desarrollador web full-stack y bachiller en Ingeniería de
            Sistemas, apasionado por la programación, proactivo y listo para
            enfrentarme a nuevos retos.
          </p>
          <p className="md:pl-10 pb-2">
            Tengo experiencia en desarrollo web front-end y back-end, también
            con entornos de desarrollo fullstack como Remix.run,a su vez con
            despliegue de aplicaciones con Docker y trabajo en equipo, siendo
            líder de equipo.
          </p>
          <p className="md:pl-10">
            Actualmente he desarrollado proyectos de pequeña a mediana escala,
            con Tecnologias como ReactJs, NodeJs, Express, Bases de
            Datos(Postgres, MongoDB, MySQL), etc.
          </p>
          <HtmlTool tagHtml="</p>" />
        </div>
      </div>
    </section>
  );
};

export default About;
