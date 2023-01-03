import React from "react";
import HtmlTool from "./Toolkits/HtmlTool";
import { SvgFramer } from "./Toolkits/SvgFramer";

interface SkillsProps {
  className?: string;
}
const Skills = ({ className }: SkillsProps) => {
  const coords = [87, 80, 78, 95, 85];
  return (
    <section
      className={`${className} flex flex-col items-center justify-center gap-5  px-5`}
      id="skills"
    >
      <h2 className="text-subtitle font-chivo text-center font-bold">
        <HtmlTool tagHtml="<h2>" />
        Habilidades
        <HtmlTool tagHtml="</h2>" />
      </h2>
      <div className="flex flex-col-reverse md:flex-row w-full h-3/5">
        <div className=" md:w-1/2 flex justify-center items-center">
          <div className=" relative w-fit">
            <span className="absolute top-3 inset-[33%] text-xs text-center h-fit w-1/3">
              Trabajo en Equipo
            </span>
            <span className="absolute top-8 inset-[47%] text-sm">
              {coords[0]}%
            </span>
            <span className="absolute inset-y-[33%] right-0 text-xs text-center h-fit w-1/5">
              Comunicación
            </span>
            <span className="absolute inset-y-[38%] right-5 text-sm">
              {coords[1]}%
            </span>
            <span className="absolute inset-y-[33%] left-0 text-xs text-center h-fit w-1/5">
              Proactivo
            </span>
            <span className="absolute inset-y-[38%] left-5 text-sm">
              {coords[4]}%
            </span>
            <span className="absolute bottom-12 right-5 text-xs text-center h-fit w-1/5">
              Adaptabilidad
            </span>
            <span className="absolute bottom-7 right-10 text-sm">
              {coords[2]}%
            </span>
            <span className="absolute bottom-12 left-5 text-xs text-center h-fit w-1/5">
              Autodidacta
            </span>
            <span className="absolute bottom-7 left-10 text-sm">
              {coords[3]}%
            </span>
            <SvgFramer coords={coords} />
          </div>
        </div>
        <div className="my-auto lg:w-1/2 md:pl-20 lg:px-20">
          <h3 className="text-xl font-chivo text-center font-bold pb-4 ">
            <HtmlTool tagHtml="<h3>" />
            Cada día es un Nuevo Reto
            <HtmlTool tagHtml="</h3>" />
          </h3>
          <p className="text-md text-justify  ">
            <HtmlTool tagHtml="<p>" />
            Resolviendo problemas, poniendome retos e investigando nuevas
            tecnologías es lo que me ayudó a mejorar mis habilidades, cada dia
            es un nuevo reto contra mi, mejorando un poco mas de lo que fuí ayer
            para ser el mejor mañana.
            <HtmlTool tagHtml="</p>" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
