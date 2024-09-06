import { useState, useEffect } from "react";
import Logo from "../images/logo.svg";
import "../css/index.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    if (menuActive) {
      // exit animation
      document.body.classList.add("menu-active-exit");
      setTimeout(() => {
        setMenuActive(false);
        document.body.classList.remove("menu-active-exit");
      }, 400);
    } else {
      setMenuActive(true);
    }
  };

  useEffect(() => {
    const preventDefault = (e) => {
      e.preventDefault();
    };

    if (menuActive) {
      // Disable scrolling and hide scrollbar
      document.body.classList.add("menu-active");
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.touchAction = "none";
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
      document.addEventListener("wheel", preventDefault, { passive: false });
    } else {
      // Re-enable scrolling and show scrollbar
      document.body.classList.remove("menu-active");
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
      document.removeEventListener("touchmove", preventDefault);
      document.removeEventListener("wheel", preventDefault);
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.body.style.touchAction = "";
      document.removeEventListener("touchmove", preventDefault);
      document.removeEventListener("wheel", preventDefault);
    };
  }, [menuActive]);

  return (
    <section className="navbar">
      <div className="nav-container bg-white top-0 left-0 h-20 text-2xl fixed flex justify-between items-center w-[calc(100%-17px)] px-6 py-4 font-extrabold">
        <div className="logo">
          <img src={Logo} alt="Logo" className="h-10" />
        </div>

        <div className="nav-links hidden sm:flex">
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

        <div
          className={`hamburger cursor-pointer z-[99999] sm:hidden ${
            menuActive ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <span
            className={`bar block w-[25px] h-[3px] my-1.5 mx-auto transition-all duration-300 ease-in-out ${
              menuActive ? "transform translate-y-2 rotate-45" : ""
            }`}
            style={{ backgroundColor: menuActive ? "white" : "black" }}
          ></span>
          <span
            className={`bar block w-[25px] h-[3px] my-1.5 mx-auto transition-all duration-300 ease-in-out ${
              menuActive ? "opacity-0" : ""
            }`}
            style={{ backgroundColor: menuActive ? "white" : "black" }}
          ></span>
          <span
            className={`bar block w-[25px] h-[3px] my-1.5 mx-auto transition-all duration-300 ease-in-out ${
              menuActive ? "transform -translate-y-2 -rotate-45" : ""
            }`}
            style={{ backgroundColor: menuActive ? "white" : "black" }}
          ></span>
        </div>
      </div>

      {/* Opened Hamburger Menu */}
      {menuActive && (
        <div className="mobile-menu fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex flex-col font-general-sans">
          <a
            href="#about"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={toggleMenu}
          >
            about
          </a>
          <a
            href="#services"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={toggleMenu}
          >
            services
          </a>
          <a
            href="#works"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={toggleMenu}
          >
            works
          </a>
          <a
            href="#contact"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-1 flex-1 flex items-center justify-center"
            onClick={toggleMenu}
          >
            Let's Talk
          </a>
        </div>
      )}
    </section>
  );
}

export default Navbar;
