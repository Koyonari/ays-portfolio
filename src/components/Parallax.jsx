import React, { useRef, useEffect, useState } from "react";
import background from "../images/components/home_bg.svg";
import takeyourtime from "../images/components/take-your-time.gif";
import takeyourtime1 from "../images/components/take-your-time.png";
import gsap from "gsap";

function Parallax({ preloaderFinished }) {
  const titleChar = "HEY THERE, I'M YS";
  const comp = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const Heading = ({ id, className }) => (
    <h1 id={id} className={className}>
      {titleChar}
    </h1>
  );

  // Trigger the animation after the preloader is done
  useEffect(() => {
    if (preloaderFinished) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      });

      return () => clearTimeout(timer);
    }
  }, [preloaderFinished]);

  useEffect(() => {
    if (isVisible && comp.current) {
      let ctx = gsap.context(() => {
        const timeline = gsap.timeline();

        timeline
          .from("#title1", {
            opacity: 0,
            y: "200%",
            duration: 0.5,
            ease: "power1.inOut",
          })
          .from(
            "#title2",
            {
              opacity: 0,
              y: "200%",
              duration: 0.5,
              ease: "power1.inOut",
            },
            "-=0.4"
          )
          .from(
            "#title3",
            {
              opacity: 0,
              y: "200%",
              duration: 0.5,
              ease: "power1.inOut",
            },
            "-=0.4"
          );
      }, comp);

      return () => ctx.revert(); // cleanup
    }
  }, [isVisible]);

  return (
    <section
      id="parallax"
      ref={comp}
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
        <Heading id="title1" />
        <Heading id="title2" className="text-outline-only" />
        <Heading id="title3" />

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
