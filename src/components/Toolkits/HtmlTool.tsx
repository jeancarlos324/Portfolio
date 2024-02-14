import React from "react";
interface Tool {
  tagHtml: string;
}

const HtmlTool = ({ tagHtml }: Tool) => {
  return (
    <span
      className=" hidden md:inline dark:text-[#ffffff71] text-[#00000011] italic text-subtitle-card px-2"
      contentEditable={false}
    >
      {tagHtml}
    </span>
  );
};

export default HtmlTool;
