import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import InputText from "./InputText";
import emailjs, { send } from "@emailjs/browser";
import HtmlTool from "../Toolkits/HtmlTool";
import { dropIn } from "../../animations/animation";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const mailInfo = {
    mail: "jecar324@gmail.com",
    subject: "Contact from Portfolio",
  };

  const form = useRef<HTMLFormElement>(null);
  const [isScreenLoading, setIsScreenLoading] = useState(false);
  const sendEmail = (event: any) => {
    event.preventDefault();
    if (form.current) {
      setIsScreenLoading(true);
      emailjs
        .sendForm(
          "service_t4umeyg",
          "template_41nq2br",
          form.current,
          "7nMmZUBEdjJmMUkEi"
        )
        .then((result) => {})
        .catch((error) => console.log(error))
        .finally(() => setIsScreenLoading(false));

      event.target.reset();
    }
  };

  return (
    <div className={`${className} flex flex-col md:flex-row`} id="contact">
      <div className="md:w-1/2 flex flex-col gap-3 items-center md:p-5 my-auto">
        <h2 className="text-title py-5 md:w-3/5 flex flex-col gap-5 animation-litle-card font-manrope font-bold text-center md:text-left">
          <HtmlTool tagHtml="<h2>" />
          <span className="text-3xl font-chivo text-left">Ponte en</span>
          <span className="font-manrope text-center">Contacto</span>
          <span className="text-3xl font-chivo text-right">conmigo</span>
          <HtmlTool tagHtml="<h2>" />
        </h2>

        <div className=" hidden w-3/5 md:flex flex-col gap-2">
          <h3 className="text-xl font-chivo text-center md:text-left">Email</h3>
          <p className="text-md pb-5">
            <a href="mailto:jecar324@gmail.com?subject=Contact Portfolio">
              jecar324@gmail.com
            </a>
          </p>
          <h3 className="text-xl font-chivo text-center md:text-left ">CV</h3>
          <p className="text-md">
            <a
              href="https://drive.google.com/file/d/1Z6MpBjE0a1YykOV9klOlfBLEOEcixYTA/view?usp=sharing"
              target={"_blank"}
              className="text-red-gradiant"
            >
              Descargar mi CV
            </a>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 md:h-full px-5 my-auto items-center">
        <div className="h-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            method="post"
            className="flex flex-col gap-5 items-end my-auto md:justify-center md:h-full sm:w-full lg:w-3/5 md:pt-20 "
          >
            <InputText
              required
              type="text"
              name="from_name"
              placeholder="Nombre"
            />
            <InputText
              // label="Email:"
              required
              type="email"
              name="user_email"
              placeholder="example@email.com"
            />
            <textarea
              required
              name="message"
              className="border border-red-gradiant  w-full bg-transparent
               p-3 rounded-md caret-red-500"
              cols={20}
              rows={5}
              placeholder="Mensaje"
            ></textarea>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-red-gradiant px-5 rounded-md font-manrope h-[50px] w-1/2"
            >
              Enviar
            </motion.button>
          </form>
        </div>
      </div>
      {isScreenLoading && (
        <div
          className={`absolute bg-[#00000088] z-30 left-0 bottom-0 w-screen h-screen flex justify-center items-center`}
        >
          <motion.div
            className="bg-green-400 p-3 rounded-md font-manrope"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            Mensaje Enviado
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;
