import { useEffect } from "react";
import background from "../images/components/home_bg.svg";
import takeyourtime from "../images/components/take-your-time.gif";
import takeyourtime1 from "../images/components/take-your-time.png";
import Scrollbar from "smooth-scrollbar";

function Parallax() {
  useEffect(() => {
    const parallax = document.querySelector(".parallax");
    const wrapperElement = document.querySelector(".wrapper");

    if (wrapperElement) {
      const scrollbar = Scrollbar.get(wrapperElement);

      if (scrollbar) {
        scrollbar.addListener(({ offset }) => {
          const scrollY = offset.y;
          // Calculate opacity based on scroll position
          const opacity = Math.max(0, 1 - scrollY / 100);
          parallax.style.opacity = opacity;
        });
      }
    }

    // Cleanup the scrollbar listener when component unmounts
    return () => {
      if (Scrollbar) {
        const scrollbar = Scrollbar.get(wrapperElement);
        if (scrollbar) scrollbar.destroy();
      }
    };
  }, []);

  return (
    <section
      id="parallax"
      className="parallax transition-opacity duration-500 w-full h-screen relative flex justify-center items-center transform-style-preserve-3d -z-10"
    >
      <div className="absolute inset-0 flex justify-center items-center translate-z-2">
        <img
          className="background object-cover w-4/5 h-1/2 rounded-3xl border-4"
          src={background}
          alt="Background"
        />
      </div>
      <div className="foreground relative z-10 text-[4.5rem] text-center font-general-sans flex flex-col">
        <h1>HEY THERE, I'M YS</h1>
        <h1 className="text-outline-only">HEY THERE, I'M YS</h1>
        <h1>HEY THERE, I'M YS</h1>
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
