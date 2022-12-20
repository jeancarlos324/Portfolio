import { motion } from "framer-motion";
import HtmlTool from "../Toolkits/HtmlTool";
import home from "../../assets/home.svg";
interface AboutMeProp {
  className?: string;
}

const AboutMe = ({ className }: AboutMeProp) => {
  return (
    <section className={`${className} flex flex-col-reverse md:flex-row`}>
      <div className="w-full md:w-1/2 flex  flex-col gap-5 md:my-auto p-5 md:px-10">
        <h1 className="text-title py-5 flex flex-col gap-5 font-manrope font-bold text-center md:text-left">
          <span className="text-3xl font-chivo">¡Hola! Soy</span> Jean Ticona
        </h1>
        <h2 className="text-title-card font-chivo text-center md:text-left font-bold">
          <HtmlTool tagHtml="<h2>" />
          Full-Stack Web Developer
          <HtmlTool tagHtml="</h2>" />
        </h2>
        <p className="text-justify">
          <HtmlTool tagHtml="<p>" />
          Entusiasta de la programación, autodidacta y en constante crecimiento.
          Me gustan los retos y como sobrellevarlos con los recursos que la
          tecnología ofrece, adaptandome y retroalimentando mis habilidades.
          <HtmlTool tagHtml="</p>" />
        </p>
        <div className="w-full flex justify-around ">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="border-2 border-red-gradiant p-3 rounded-xl font-manrope font-bold text-menu"
          >
            Descargar CV
          </motion.button>
          <motion.button className="bg-red-gradiant p-3 px-6 rounded-xl font-manrope font-bold text-menu">
            Contactar
          </motion.button>
        </div>
      </div>
      <motion.div className="w-full md:w-1/2 flex justify-center items-center">
        <img className="md:w-full md:h-full p-5" src={home} alt="home" />
      </motion.div>
    </section>
  );
};

export default AboutMe;
