import { useState, useEffect } from "react";
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
      className="contact-section flex flex-col items-center mb-8"
    >
      <h2 className="contact-h2 text-5xl md:text-7xl font-semibold text-black text-center mt-8 mb-12 bold">
        - Get in touch -
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="info-left w-full md:w-1/2 px-4">
          <div className="contact-info">
            <h3 className="text-3xl font-semibold text-black mb-4">
              Contact Details
            </h3>
            <p>yongshyan.an@gmail.com</p>
            <p>+65 9711 2702</p>
          </div>
          <div className="digital-space">
            <h3 className="text-3xl font-semibold text-black mb-4">
              My Digital Spaces
            </h3>
            <div className="space">
              <a href="https://github.com/Koyonari">GitHub</a>
            </div>
            <div className="space">
              <a href="https://github.com/Koyonari">LinkedIn</a>
            </div>
            <div className="space">
              <a href="https://github.com/Koyonari">MonkeyType</a>
            </div>
          </div>
          <div className="location">
            <h3 className="text-3xl font-semibold text-black mb-4">Location</h3>
            <p>Singapore</p>
            {/* Display only if fetched correctly */}
            {singaporeTime && <p>Current local time: {singaporeTime}</p>}
          </div>
        </div>
        <div className="info-right w-full md:w-1/2 px-4 items-center">
          <div className="contact-form-container bg-black text-white rounded-lg p-6 shadow-lg">
            <form
              action="https://formsubmit.co/yongshyan.an@gmail.com"
              method="POST"
              name="form"
            >
              <div className="form-control mb-4">
                <label
                  htmlFor="name"
                  className="block text-xl font-semibold mb-2"
                  name="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter your name"
                  className="input-field w-full px-4 py-2 rounded-lg border-2 text-black border-white outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold mb-2"
                  name="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter your email"
                  className="input-field w-full px-4 py-2 rounded-lg border-2 text-black border-white outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label
                  htmlFor="message"
                  name="message"
                  className="block text-xl font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Enter your message"
                  name="message"
                  className="input-field w-full px-4 py-2 rounded-lg border-2 text-black border-white outline-none"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                name="submit"
                className="submit-btn w-full px-4 py-2 bg-white text-black border-red-600 border-4 font-semibold rounded-lg cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300"
              />
            </form>
            <form
              action="https://formsubmit.co/yongshyan.an@gmail.com"
              method="POST"
            >
              <input type="text" name="name" required />
              <input type="email" name="email" required />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
