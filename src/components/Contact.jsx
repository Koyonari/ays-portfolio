import "../css/index.css";

function Contact() {
  return (
    <div className="contact-section flex flex-col items-center mb-8">
      <h2 className="contact-h2 text-5xl md:text-7xl font-semibold text-black text-center mt-8 mb-12">
        <u>Get in touch.</u>
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="info-left w-full md:w-1/2 px-4">
          <div className="info-box bg-black text-white rounded-xl p-6 mb-6">
            <h3 className="text-2xl mb-4">LinkedIn</h3>
            <p>
              <a href="https://www.linkedin.com/in/yong-shyan-an-76ab8a272/">
                Find more information about me such as certifications, job
                experiences and education <u>here</u>!
              </a>
            </p>
          </div>
          <div className="info-box bg-black text-white rounded-xl p-6 mb-6">
            <h3 className="text-2xl mb-4">Github</h3>
            <p>
              <a href="https://github.com/Koyonari">
                Check out more of my projects <u>here</u>!
              </a>
            </p>
          </div>
          <div className="info-box bg-black text-white rounded-xl p-6 mb-6">
            <h3 className="text-2xl mb-4">Monkeytype</h3>
            <p>
              <a href="https://monkeytype.com/profile/NovaEclipse">
                Learn more about my hobby and typing speeds <u>here</u>!
              </a>
            </p>
          </div>
        </div>
        <div className="info-right w-full md:w-1/2 px-4 items-center">
          <div className="contact-form-container bg-black text-white rounded-lg p-6 shadow-lg">
            <form action="https://formspree.io/f/xjvlzbae" method="POST">
              <div className="form-control mb-4">
                <label
                  htmlFor="name"
                  className="block text-xl font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder="Enter  your  name"
                  className="input-field w-full px-4 py-2 rounded-lg border-2 text-black border-white outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label
                  htmlFor="email"
                  className="block text-xl font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder="Enter  your  email"
                  className="input-field w-full px-4 py-2 rounded-lg border-2 text-black border-white outline-none"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label
                  htmlFor="message"
                  className="block text-xl font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Enter  your  message"
                  name="message"
                  className="input-field w-full px-4 py-2 rounded-lg border-2 text-black border-white outline-none"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                className="submit-btn w-full px-4 py-2 bg-white text-black border-red-600 border-4 font-semibold rounded-lg cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
