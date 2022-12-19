import React from "react";

interface FooterProps {
  className?: string;
}
const Footer = ({ className }: FooterProps) => {
  return <div className={`${className} w-full h-1/3 bg-red-500`}>
    <div className="dark:bg-secondary-color-gradiant" >a</div>
    <div>b</div>
  </div>;
};

export default Footer;
