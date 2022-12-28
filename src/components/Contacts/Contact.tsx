import { motion } from "framer-motion";
import React, { useRef } from "react";
import InputText from "./InputText";
import emailjs, { send } from "@emailjs/browser";

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const mailInfo = {
    mail: "jecar324@gmail.com",
    subject: "Contact from Portfolio",
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: any) => {
    event.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_t4umeyg",
          "template_41nq2br",
          form.current,
          "7nMmZUBEdjJmMUkEi"
        )
        .then(
          (result) => {
            console.log(result);
            console.log(result.text);
          },
          (error) => {
            console.log(error);
            console.log(error.text);
          }
        );
      event.target.reset();
    }
  };

  return (
    <div className={`${className} flex flex-col md:flex-row`}>
      <div className="md:w-1/2">a</div>
      <div className="md:w-1/2 h-full bg-emerald-400 p-5">
        <div className="bg-yellow-500 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            // action={`mailto:${mailInfo.mail}?subject=${mailInfo.subject}`}
            method="post"
            // encType="text/plain"
            className="text-primary-color flex flex-col gap-5"
          >
            <InputText label="Nombre Completo:" type="text" name="user_name" />
            <InputText label="Email:" type="text" name="user_email" />
            <textarea name="message" cols={30} rows={10}></textarea>
            {/* <InputText label="Nombre Completo:" type="text" name="firstName" />
            <InputText label="Nombre Completo:" type="text" name="firstName" /> */}

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
