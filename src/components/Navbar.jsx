import { useState, useEffect } from "react";
import Logo from "../images/components/logo.svg";
import Hamburger from "hamburger-react";
import "../css/index.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Disable Menu
      document.body.classList.add("menu-active");
    } else {
      // Enable Menu
      document.body.classList.remove("menu-active");
    }
  }, [isOpen]);

  return (
    <section className="navbar">
      <div className="nav-container bg-white top-0 left-0 h-20 text-2xl fixed flex justify-between items-center w-[calc(100%-17px)] max-md:w-full px-6 py-4 font-extrabold">
        <div className="logo">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        <div className="nav-links hidden lg:flex">
          <a
            href="#about"
            className="nav-link text-black leading-[3rem] no-underline transition-all duration-500 ease-in-out mx-5"
          >
            about
          </a>
          <a
            href="#services"
            className="nav-link text-black leading-[3rem] no-underline transition-all duration-500 ease-in-out mx-5"
          >
            services
          </a>
          <a
            href="#works"
            className="nav-link text-black leading-[3rem] no-underline transition-all duration-500 ease-in-out mx-5"
          >
            works
          </a>
          <a
            href="#contact"
            className="nav-link text-white bg-black border border-black p-2 leading-8 no-underline transition-all duration-500 ease-in-out mx-5 rounded-full"
          >
            Let's Talk
          </a>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="fixed top-4 right-4 z-[99999] lg:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          color={isOpen ? "white" : "black"}
        />
      </div>
      {/* Opened Hamburger Menu */}
      <div
        className={`mobile-menu fixed top-0 left-0 w-screen bg-black z-[9999] flex flex-col font-general-sans opacity-85 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#about"
          className="nav-link text-white py-8 text-2xl no-underline transition-all duration-500 ease-in-out flex-1 flex items-center justify-center border-b border-white/20 "
          onClick={toggleMenu}
        >
          about
        </a>
        <a
          href="#services"
          className="nav-link text-white py-8 text-2xl no-underline transition-all duration-500 ease-in-out flex-1 flex items-center justify-center border-b border-white/20"
          onClick={toggleMenu}
        >
          services
        </a>
        <a
          href="#works"
          className="nav-link text-white py-8 text-2xl no-underline transition-all duration-500 ease-in-out flex-1 flex items-center justify-center border-b border-white/20"
          onClick={toggleMenu}
        >
          works
        </a>
        <a
          href="#contact"
          className="nav-link text-white py-8 text-2xl no-underline transition-all duration-500 ease-in-out flex-1 flex items-center justify-center"
          onClick={toggleMenu}
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
}

export default Navbar;
