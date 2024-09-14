import { useEffect, useState } from "react";
import background from "../images/components/home_bg.svg";
import takeyourtime from "../images/components/take-your-time.gif";
import takeyourtime1 from "../images/components/take-your-time.png";
import regex from "../hooks/regexStringArray";
import { motion } from "framer-motion";

function Parallax() {
  const titleChar = regex("HEY THERE, I'M YS");
  const [startAnimation, setStartAnimation] = useState(false);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  const MotionHeading = ({ className }) => (
    <motion.h1
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.1 }}
      className={className}
    >
      {titleChar.map((char) => (
        <motion.span
          key={char}
          transition={{ duration: 0.2 }}
          variants={charVariants}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );

  return (
    <section
      id="parallax"
      className="parallax -z-10 w-full h-screen relative flex justify-center items-center transform-style-preserve-3d"
    >
      <div className="absolute inset-0 flex justify-center items-center translate-z-2">
        <img
          className="background object-cover w-4/5 h-1/2 rounded-3xl border-4"
          src={background}
          alt="Background"
        />
      </div>
      <div className="foreground relative z-10 text-[4.5rem] text-center font-general-sans flex flex-col">
        {startAnimation && (
          <>
            <MotionHeading />
            <MotionHeading className="text-outline-only" />
            <MotionHeading />
          </>
        )}
        <div className="take-your-time absolute xl:bottom-[-20vh] lg:bottom-[-28vh] md:bottom-[-27vh] bottom-[-35vh] flex justify-center w-full">
          <div className="time flex-col">
            <img
              src={takeyourtime}
              alt="Take your time"
              className="w-[12vh] opacity-60"
            />
            <img
              src={takeyourtime1}
              alt="Take your time"
              className="w-[12vh] opacity-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parallax;
