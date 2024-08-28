import { useEffect } from "react";
import background from "../images/background.png";
import takeyourtime from "../images/take-your-time.gif";
import takeyourtime1 from "../images/take-your-time.png";
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
    <div className="parallax transition-opacity duration-500 ease-in-out w-full relative flex justify-center items-center h-full transform-style-preserve-3d -z-10">
      <img
        className="background absolute object-cover z-[-1] w-full h-full bg-white translate-z-2 overflow-clip"
        src={background}
        alt="Background"
      />
      <div className="foreground text-[7rem] translate-z z-[-1] grid place-items-center font-general-sans">
        <h1 className="w-screen text-center mb-0 mr-56">
          HI THERE, I'M
          <br />
          <span className="ml-80">AN YONG SHYAN</span>
        </h1>
        <p className="mt-4 w-[40vw] text-[1.25rem] text-center">
          An aspiring software developer & front-end developer building
          impactful software & crafting elegant interfaces
        </p>
        <div className="take-your-time flex flex-col items-center">
          <img
            src={takeyourtime}
            alt="Take your time"
            className="w-[9vw] opacity-60"
          />
          <img
            src={takeyourtime1}
            alt="Take your time"
            className="w-[9vw] opacity-60"
          />
        </div>
      </div>
    </div>
  );
}

export default Parallax;
