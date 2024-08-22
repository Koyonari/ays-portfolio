import { useState } from "react";
import "../index.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar w-screen z-[1] h-0">
      <div className="navbar w-screen z-10 h-0" id="home">
        <div className="container flex justify-between items-center">
          <div className="box1 w-[85%]">
            <ul
              className={`nav-menu flex flex-col gap-2 transition-transform duration-500 ease-in-out ${
                menuActive ? "active" : ""
              }`}
            >
              <a
                href="#home"
                className="nav-link text-black no-underline transition-all duration-500 ease-in-out"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link text-black no-underline transition-all duration-500 ease-in-out"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="nav-link text-black no-underline transition-all duration-500 ease-in-out"
                onClick={closeMenu}
              >
                Services
              </a>
              <a
                href="#works"
                className="nav-link text-black no-underline transition-all duration-500 ease-in-out"
                onClick={closeMenu}
              >
                Works
              </a>
              <a
                href="#contact"
                className="nav-link text-black no-underline transition-all duration-500 ease-in-out"
                onClick={closeMenu}
              >
                Contact
              </a>
            </ul>
          </div>

          <div
            className={`hamburger cursor-pointer ${menuActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span
              className={`bar block w-[25px] h-[3px] my-1.5 mx-auto bg-black transition-all duration-300 ease-in-out ${
                menuActive ? "transform translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`bar block w-[25px] h-[3px] my-1.5 mx-auto bg-black transition-all duration-300 ease-in-out ${
                menuActive ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`bar block w-[25px] h-[3px] my-1.5 mx-auto bg-black transition-all duration-300 ease-in-out ${
                menuActive ? "transform -translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </div>
          <h5 className="text-[1rem]">Open to work March 2024</h5>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
