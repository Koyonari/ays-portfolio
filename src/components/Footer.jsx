import backtotop from "../images/icons/backtotop.svg";
import "../css/index.css";

const Footer = () => {
  return (
    <div className="footer font-general-sans text-xs sm:text-sm xl:text-xl mt-16 md:mt-14 lg:mt-32 flex flex-col md:flex-row justify-between items-center w-screen relative px-6">
      <div className="w-screen md:w-1/3 text-center md:text-left mb-4 md:mb-0">
        <p className="text-black">&copy; 2024 An Yong Shyan</p>
      </div>
      <div className="w-screen md:w-1/3 text-center mb-4 md:mb-0">
        <p>Site designed and developed with ❤️</p>
      </div>
      <div className="w-screen md:w-1/3 flex justify-end">
        <a
          href="#parallax"
          className="scroll flex flex-row items-center cursor-pointer"
        >
          <img
            src={backtotop}
            alt="backtotop"
            className="absolute mb-12 md:relative w-4 sl:w-6 lg:w-9 xl:w-12 md:h-12 right-2 md:right-0 md:mb-0"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
