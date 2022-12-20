import React from "react";
interface Tool {
  tagHtml: string;
}

const HtmlTool = ({ tagHtml }: Tool) => {
  return (
    <span
      className=" hidden md:inline dark:text-gray-300 opacity-20 italic text-md px-2"
      contentEditable={false}
    >
      {tagHtml}
    </span>
  );
};

export default HtmlTool;
