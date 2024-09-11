import { useState, useEffect } from "react";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";
import monkeytype from "../images/icons/monkeytype.svg";
import submit from "../images/icons/submit.svg";
import submitwhite from "../images/icons/submit-white.svg";

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
      <h2 className="contact-h2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-general-sans text-black text-center mt-10 mb-12">
        - Get in touch -
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="info-left w-full md:w-3/5 lg:w-3/4 px-8 lg:px-24 items-center">
          <div className="contact-form-container">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 font-extrabold font-general-sans">
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
                className="submit-btn group flex items-center justify-center px-4 py-2 bg-white text-black border-stone-700 border-2 font-semibold rounded-lg cursor-pointer hover:bg-stone-700 hover:text-white transition-all duration-300 mx-auto sm:mx-0"
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

        <div className="info-right md:w-1/4 leading-8 flex flex-col md:block px-8 md:px-0">
          <div className="contact-info">
            <h3 className="text-2xl md:text-3xl font-general-sans text-black mb-4 mt-12">
              Contact Details
            </h3>
            <p className="text-sm md:text-lg">yongshyan.an@gmail.com</p>
            <p className="text-sm md:text-lg">+65 9711 2702</p>
          </div>
          <div className="digital-space mt-4 md:mt-12">
            <h3 className="text-2xl md:text-3xl font-general-sans text-black mb-4">
              My Digital Spaces
            </h3>

            <div className="space flex flex-row items-center">
              <img className="github w-6 h-6 mr-2" src={github} alt="github" />
              <a
                href="https://github.com/Koyonari"
                className="text-sm md:text-lg link-hover text-center py-0.5 px-1"
              >
                GitHub
              </a>
            </div>

            <div className="space flex flex-row items-center my-2 md:my-0">
              <img
                className="linkedin w-6 h-6 mr-2"
                src={linkedin}
                alt="linkedin"
              />
              <a
                href="https://www.linkedin.com/in/yong-shyan-an-76ab8a272/"
                className="text-sm md:text-lg link-hover text-center py-0.5 px-1"
              >
                LinkedIn
              </a>
            </div>

            <div className="space flex flex-row items-center my-2 md:my-0">
              <img
                className="monkeytype w-6 h-6 mr-2"
                src={monkeytype}
                alt="monkeytype"
              />
              <a
                href="https://monkeytype.com/profile/NovaEclipse"
                className="text-sm md:text-lg link-hover text-center py-0.5 px-1"
              >
                MonkeyType
              </a>
            </div>
          </div>
          <div className="location mt-4 md:mt-12">
            <h3 className="text-2xl md:text-3xl font-general-sans text-black mb-4">
              Location
            </h3>
            <p className="text-sm md:text-lg">Singapore</p>
            {/* Display only if fetched correctly */}
            {singaporeTime && (
              <p className="text-sm md:text-lg">
                Current local time:
                <span className="ml-2 font-mono">{singaporeTime}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
