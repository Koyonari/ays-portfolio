import { useState, useEffect } from "react";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import monkeytype from "../images/icons/monkeytype.svg";
import submit from "../images/icons/submit.svg";
import submitwhite from "../images/icons/submit-white.svg";
import backtotop from "../images/icons/backtotop.svg";
import "../css/index.css";

function Contact() {
  const [singaporeTime, setSingaporeTime] = useState("");

  useEffect(() => {
    const fetchAndUpdateSingaporeTime = () => {
      const fetchSingaporeTime = async () => {
        try {
          const response = await fetch(
            "https://timeapi.io/api/time/current/zone?timeZone=Singapore"
          );
          const data = await response.json();
          const formattedTime = `${String(data.date)} ${String(
            data.hour
          ).padStart(2, "0")}:${String(data.minute).padStart(2, "0")}:${String(
            data.seconds
          ).padStart(2, "0")}`;
          setSingaporeTime(formattedTime);
        } catch (error) {
          console.error("Error fetching Singapore time:", error);
          setSingaporeTime(null);
        }
      };

      fetchSingaporeTime();
      const interval = setInterval(fetchSingaporeTime, 1000);

      return () => clearInterval(interval);
    };

    fetchAndUpdateSingaporeTime();
  }, []);

  return (
    <section
      id="contact"
      className="contact-section flex flex-col items-center"
    >
      <h2 className="contact-h2 text-5xl md:text-7xl font-general-sans text-black text-center mt-10 mb-12 bold">
        - Get in touch -
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="info-left w-full md:w-3/4 px-24 items-center">
          <div className="contact-form-container">
            <h1 className="text-6xl mb-6 font-extrabold font-general-sans">
              Have an awesome idea?
              <br />
              Let's bring forward your vision.
            </h1>
            <p className="mb-7">
              I am looking for opportunities and internships as a software
              engineer.
            </p>
            <form
              action="https://formsubmit.co/yongshyan.an@gmail.com"
              method="POST"
              name="form"
            >
              <div className="form-control mb-4">
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Your Name"
                  className="input-field w-full py-2 text-black border-black border-b-2 border-opacity-50 outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Your Email"
                  className="input-field w-full py-2 text-black border-black border-b-2 border-opacity-50 outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <textarea
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                  className="input-field w-full py-2 text-black border-black border-b-2 border-opacity-50 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                name="submit"
                className="submit-btn group flex items-center justify-center px-4 py-2 bg-white text-black border-stone-700 border-2 font-semibold rounded-lg cursor-pointer hover:bg-stone-700 hover:text-white transition-all duration-300"
              >
                <div className="relative w-5 h-5 mr-2">
                  <img
                    src={submit}
                    alt="submit"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={submitwhite}
                    alt="submit"
                    className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="info-right md:w-1/4 leading-8">
          <div className="contact-info">
            <h3 className="text-3xl font-general-sans text-black mb-4 mt-12">
              Contact Details
            </h3>
            <p>yongshyan.an@gmail.com</p>
            <p>+65 9711 2702</p>
          </div>
          <div className="digital-space">
            <h3 className="text-3xl font-general-sans text-black mb-4 mt-12">
              My Digital Spaces
            </h3>

            <div className="space flex flex-row items-center">
              <img className="github w-6 h-6 mr-2" src={github} alt="github" />
              <a href="https://github.com/Koyonari" className="link-hover">
                GitHub
              </a>
            </div>

            <div className="space flex flex-row items-center">
              <img
                className="linkedin w-6 h-6 mr-2"
                src={linkedin}
                alt="linkedin"
              />
              <a
                href="https://www.linkedin.com/in/yong-shyan-an-76ab8a272/"
                className="link-hover"
              >
                LinkedIn
              </a>
            </div>

            <div className="space flex flex-row items-center">
              <img
                className="monkeytype w-6 h-6 mr-2"
                src={monkeytype}
                alt="monkeytype"
              />
              <a
                href="https://monkeytype.com/profile/NovaEclipse"
                className="link-hover"
              >
                MonkeyType
              </a>
            </div>
          </div>
          <div className="location">
            <h3 className="text-3xl font-general-sans text-black mb-4 mt-12">
              Location
            </h3>
            <p>Singapore</p>
            {/* Display only if fetched correctly */}
            {singaporeTime && <p>Current local time: {singaporeTime}</p>}
          </div>
        </div>
      </div>

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
    </section>
  );
}

export default Contact;
