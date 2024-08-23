// Parallax section
import background from "../images/background.png";
import takeyourtime from "../images/take-your-time.gif";
import takeyourtime1 from "../images/take-your-time.png";

function Parallax() {
  const parallax = document.querySelector(".parallax");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Get current scroll position

    // Calculate opacity based on scroll position
    const opacity = Math.max(0, 1 - scrollY / 100); // Adjust 200 for desired fade distance

    parallax.style.opacity = opacity;
  });

  return (
    <div className="parallax transition-opacity duration-500 ease-in-out w-full relative flex justify-center items-center h-full transform-style-preserve-3d -z-10">
      <img
        className="background absolute object-cover z-[-1] w-full h-full bg-white translate-z-2 overflow-clip"
        src={background}
        alt="Background"
      />
      <div className="foreground text-[7rem] translate-z z-[-1] grid place-items-center font-general-sans">
        <h1 className="w-screen text-center mb-0 mr-48">
          HI THERE, I'M
          <br />
          <span className="ml-80">AN YONG SHYAN</span>
        </h1>
        <p className="mt-4 w-[40vw] text-[1.25rem] text-center">
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
