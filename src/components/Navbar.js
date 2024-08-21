const Navbar = () => {
  return (
    <>
      <nav className="navbar w-screen z-[1] h-0">
        <div className="container flex">
          <div className="box1 w-85%">
            <ul className="nav-menu flex gap-2 flex-col cursor-pointer decoration-none text-black transition duration-[600] ease-in-out">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#works">Works</a>
              <a href="#contact">Contact</a>
            </ul>
          </div>
          <div className="hamburger md:hidden">
            <span className="bar block w-2 h-2 mx-auto transition-all duration-300 ease-in-out"></span>
            <span className="bar block w-2 h-2 mx-auto transition-all duration-300 ease-in-out"></span>
            <span className="bar block w-2 h-2 mx-auto transition-all duration-300 ease-in-out"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
