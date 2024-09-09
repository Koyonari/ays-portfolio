import { useState, useEffect } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Toolkit from "./components/Toolkit";
import Certifications from "./components/Certifications";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/index.css";

const App = () => {
  const [preloader, setPreloader] = useState(true);

  const [slideOut, setSlideOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideOut(true);
      // Slide duration
      const slideTimer = setTimeout(() => {
        setPreloader(false);
      }, 400);
      return () => clearTimeout(slideTimer);
    }, 1600); // Preloader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {preloader && (
        <div
          className={`loader-wrapper fixed inset-0 flex flex-col items-center justify-center bg-black text-white transition-transform duration-500 ease-in-out ${
            slideOut ? "translate-y-[-100%]" : ""
          }`}
        >
          <h1 className="text-6xl mb-2 italic font-extrabold uppercase tracking-widest">
            Portfolio
          </h1>
          <h2 className="text-4xl font-semibold uppercase tracking-wider">
            An Yong Shyan
          </h2>
        </div>
      )}
      <div
        className={`App transition-opacity duration-300 ${
          preloader ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-[10000]">
          <Navbar />
        </div>
        <div
          id="wrapper"
          className="wrapper transition-opacity duration-500 ease-in-out w-screen h-screen perspective-100 overflow-y-auto overflow-x-hidden"
        >
          {/* Parallax */}
          <Parallax />
          {/* About/Hero section */}
          <section className="text-3xl bg-black text-white rounded-3xl py-8 px-8">
            <About />
            {/* Services section */}
            <Services />
            {/* Toolkit section */}
            <Toolkit />
            {/* Certifications section */}
            <Certifications />
            {/* Works section */}
            <Works />
          </section>
          {/* Contact section */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
