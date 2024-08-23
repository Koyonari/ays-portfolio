import { useState, useEffect } from "react";
import "../css/index.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
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
    <div className="navbar w-screen z-[1] h-auto mt-3" id="home">
      <div className="nav-container flex items-center justify-between w-full px-6">
        {/* Navbar */}
        <div className="nav-links flex-col hidden sm:flex">
          <a
            href="#home"
            className="nav-link text-black no-underline transition-all duration-500 ease-in-out mx-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link text-black no-underline transition-all duration-500 ease-in-out mx-2"
          >
            About
          </a>
          <a
            href="#services"
            className="nav-link text-black no-underline transition-all duration-500 ease-in-out mx-2"
          >
            Services
          </a>
          <a
            href="#works"
            className="nav-link text-black no-underline transition-all duration-500 ease-in-out mx-2"
          >
            Works
          </a>
          <a
            href="#contact"
            className="nav-link text-black no-underline transition-all duration-500 ease-in-out mx-2"
          >
            Contact
          </a>
        </div>

        {/* Hamburger Menu */}
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

        <div className="flex-1"></div>
        <h5 className="text-[1rem]">Open to work March 2024</h5>
      </div>

      {/* Opened Hamburger Menu */}
      {menuActive && (
        <div className="mobile-menu fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex flex-col font-general-sans">
          <a
            href="#home"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#services"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="#works"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-2 flex-1 flex items-center justify-center border-b border-white/20"
            onClick={closeMenu}
          >
            Works
          </a>
          <a
            href="#contact"
            className="nav-link text-white text-5xl no-underline transition-all duration-500 ease-in-out py-1 flex-1 flex items-center justify-center"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
