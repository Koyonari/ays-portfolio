// Import files and dependencies
import { useState, useEffect, useRef } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Toolkit from "./components/Toolkit";
import Certifications from "./components/Certifications";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import noti from "./sound/notification-effect.wav";
import "./css/index.css";

const App = () => {
  const [preloader, setPreloader] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const audioRef = useRef(new Audio(noti));

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

  const handleMessageSent = () => {
    setShowPopup(true);
    audioRef.current.play();
    setTimeout(() => setShowPopup(false), 5000);
  };

  return (
    <>
      {preloader && (
        <div
          className={`loader-wrapper fixed inset-0 flex flex-col items-center justify-center bg-black text-white transition-transform duration-500 ease-in-out ${
            slideOut ? "translate-y-[-100%]" : ""
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 italic font-extrabold uppercase tracking-widest">
            Portfolio
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
            An Yong Shyan
          </h2>
        </div>
      )}
      <div
        className={`App transition-opacity duration-300 ${
          preloader ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="fixed top-0 left-0 z-[10000]">
          <Navbar />
        </div>
        <div
          id="wrapper"
          className="wrapper w-screen h-screen perspective-100 overflow-y-auto overflow-x-hidden"
        >
          {/* Parallax */}
          <Parallax />
          {/* About/Hero section */}
          <section className="text-3xl bg-black text-white rounded-3xl py-8 px-8 flex flex-col">
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
          <Contact onMessageSent={handleMessageSent} />
          {/* Footer */}
          <Footer />
        </div>
      </div>

      <div
        className={`fixed bottom-12 right-8 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-[10001] transition-all duration-500 ease-in-out ${
          showPopup ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        Message sent successfully!
      </div>
    </>
  );
};

export default App;
