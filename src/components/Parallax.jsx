import background from "../images/components/home_bg.svg";
import takeyourtime from "../images/components/take-your-time.gif";
import takeyourtime1 from "../images/components/take-your-time.png";

function Parallax() {
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
