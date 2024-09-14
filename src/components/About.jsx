// About section
import "../css/index.css";
import switchBackground from "../images/components/switch.webp";
import regex from "../hooks/regexStringArray";
import { motion } from "framer-motion";

function About() {
  const titleChar = regex(about.title);
  const descChar = regex(about.description);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  return (
    <section className="hero p-4 flex flex-col md:flex-row md:p-8 items-center">
      <img
        src={switchBackground}
        alt="Switch"
        loading="lazy"
        className="switch object-cover rounded-full w-[40vw] md:h-[75vh] h-[30vh]"
      />

      <div className="hero-container md:w-[60vw]" id="about">
        <motion.h2
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.1 }}
          className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl mb-8 md:mb-16 font-general-sans"
        >
          {titleChar.map((char) => (
            <motion.span
              key={char}
              transition={{ duration: 1.5 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.01 }}
          className="text-base md:text-2xl lg:text-3xl xl:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed w-full"
        >
          {descChar.map((char) => (
            <motion.span
              key={char}
              transition={{ duration: 0.001 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}

const about = {
  title: "About Me",
  description:
    "As a 2nd year Information Technology student at Ngee Ann Polytechnic with a long-standing passion for software and full-stack development, I'm eager to learn and contribute to meaningful projects. I'm seeking a full-time, year-long internship starting in March 2025, where I can apply my skills and passion to the tech industry.",
};

export default About;
