import { motion } from "framer-motion";
import React from "react";
interface FooterProps {
  className?: string;
}
const Footer = ({ className }: FooterProps) => {
  const socialNetwork = [
    {
      id: 1,
      name: "fa-brands fa-github",
      url: "https://github.com/jeancarlos324",
    },
    {
      id: 2,
      name: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/jean-ticona-69a824204/",
    },
    {
      id: 3,
      name: "fa-brands fa-discord",
      url: "https://discordapp.com/users/jeancarlos#3423",
    },
    { id: 4, name: "fa-brands fa-google", url: "mailto:jecar324@gmail.com" },
  ];
  return (
    <div className={`${className} w-full flex flex-col dark:bg-primary-color`}>
      <div className="pt-5 pb-5 md:pt-5 md:pb-0 z-10 dark:bg-primary-color">
        <ul className="flex justify-center md:justify-end md:p-5 md:gap-5 gap-10">
          {socialNetwork.map((social) => (
            <motion.li key={social.id} whileHover={{ scale: 1.2 }}>
              <a
                href={`${social.url}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`${social.name} text-3xl md:text-2xl`}></i>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="dark:bg-secondary-color-gradiant font-manrope p-1 px-3 flex justify-center md:justify-end text-xs z-10">
        Jean Ticona 2022. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
