import { motion } from "framer-motion";
import HtmlTool from "../Toolkits/HtmlTool";
import home from "../../assets/home.svg";
import "./home.css";
interface HomeProp {
  className?: string;
}

const Home = ({ className }: HomeProp) => {
  return (
    <section
      id="home"
      className={`${className} flex flex-col-reverse md:flex-row`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          x: { duration: 1 },
          default: { ease: "linear" },
        }}
        className="w-full md:w-1/2 flex  flex-col gap-5 md:my-auto p-5 md:px-10"
      >
        <h1 className="text-title py-5 md:pl-10 flex flex-col gap-5 font-manrope font-bold text-center md:text-left">
          <span className="text-3xl font-chivo">¡Hola! Soy</span> Jean Ticona
        </h1>
        <h2 className="text-title-card font-chivo text-center md:text-left font-bold">
          <HtmlTool tagHtml="<h2>" />
          Full-Stack Web Developer
          <HtmlTool tagHtml="</h2>" />
        </h2>
        <div className="text-justify ">
          <HtmlTool tagHtml="<p>" />
          <p className="md:pl-10">
            Entusiasta de la programación, autodidacta y en constante
            crecimiento. Me gustan los retos y como sobrellevarlos con los
            recursos que la tecnología ofrece, adaptandome y retroalimentando
            mis habilidades.
          </p>
          <HtmlTool tagHtml="</p>" />
        </div>
        <div className="w-full flex justify-around ">
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            className="border-2 border-red-gradiant p-3 rounded-xl font-manrope font-bold text-menu"
          >
            <a
              href="https://drive.google.com/file/d/1d5ABgCc-kWdLDQySW8_ftu49mqjp2t8E/view?usp=sharing"
              target={"_blank"}
            >
              Descargar CV
            </a>
          </motion.button>
          <motion.button
            type="button"
            className="bg-red-gradiant p-3 px-6 rounded-xl font-manrope font-bold text-menu"
          >
            <a href="#contact">Contactar</a>
          </motion.button>
        </div>
      </motion.div>
      <motion.div className="w-full md:w-1/2 flex justify-center items-center animation-card">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            x: { duration: 1 },
            default: { ease: "linear" },
          }}
          className="md:w-full md:h-full p-5"
          src={home}
          alt="home"
        />
      </motion.div>
    </section>
  );
};

export default Home;
