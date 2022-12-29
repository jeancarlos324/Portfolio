import React from "react";
import HtmlTool from "./Toolkits/HtmlTool";
import { SvgFramer } from "./Toolkits/SvgFramer";

interface SkillsProps {
  className?: string;
}
const Skills = ({ className }: SkillsProps) => {
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
      <div>
        <SvgFramer />
      </div>
    </section>
  );
};

export default Skills;
