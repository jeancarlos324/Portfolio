import React from "react";
import HtmlTool from "./Toolkits/HtmlTool";

interface SkillsProps {
  className?: string;
}
const Skills = ({ className }: SkillsProps) => {
  return (
    <section
      className={`${className} flex flex-col items-center justify-center gap-5  px-5 md:pt-10`}
      id="skills"
    >
      <h2 className="text-subtitle font-chivo text-center font-bold">
        <HtmlTool tagHtml="<h2>" />
        Habilidades
        <HtmlTool tagHtml="</h2>" />
      </h2>
    </section>
  );
};

export default Skills;
