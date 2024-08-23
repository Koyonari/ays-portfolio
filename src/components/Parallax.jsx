// Parallax section
import background from "../images/background.png";
import takeyourtime from "../images/take-your-time.gif";
import takeyourtime1 from "../images/take-your-time.png";

function Parallax() {
  return (
    <div className="parallax transition-opacity duration-500 ease-in-out w-full relative flex justify-center items-center h-full transform-style-preserve-3d -z-10">
      <img
        className="background absolute object-cover z-[-1] w-full h-full bg-white translate-z-2 overflow-clip"
        src={background}
        alt="Background"
      />
      <div className="foreground pt-24 translate-z z-[-1] grid place-items-center font-general-sans">
        <h1 className="text-[4.5rem] w-screen mr-9 text-center mb-0">
          HI THERE, I'M
          <br />
          <span className="ml-12 text-[4.5rem]">AN YONG SHYAN</span>
        </h1>
        <p className="mt-4 w-[20vw] text-[0.75rem] text-center font-light">
          An aspiring software developer & front-end developer building
          impactful software & crafting elegant interfaces
        </p>
        <div class="take-your-time flex flex-col items-center">
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
