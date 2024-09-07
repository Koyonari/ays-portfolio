import backtotop from "../images/icons/backtotop.svg";
import "../css/index.css";

const Footer = () => {
  return (
    <div className="footer font-general-sans mt-32 flex flex-col md:flex-row justify-between items-center w-screen px-6">
      <p className="text-black">&copy; 2024 An Yong Shyan</p>
      <p>Site designed and developed with ❤️</p>
      <a
        href="#parallax"
        className="scroll uppercase flex flex-row items-center cursor-pointer"
      >
        BACK TO TOP
        <img src={backtotop} alt="backtotop" className="w-16 h-16 ml-2" />
      </a>
    </div>
  );
};

export default Footer;
