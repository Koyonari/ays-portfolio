// About section
import "../css/index.css";
import switchBackground from "../images/switch.webp";

function About() {
  return (
    <section className="hero p-8 flex h-[75vh]" data-scroll-section>
      <img
        src={switchBackground}
        alt="Switch"
        loading="lazy"
        className="switch object-cover rounded-full w-[40vw] h-[75vh]"
      />

      <div className="hero-container w-[60vw]" id="about">
        <h2 className="text-[8rem] leading-[8rem] mb-16 font-general-sans">
          <span>About Me</span>
        </h2>
        <p className="text-[2rem] leading-loose">
          <span>
            As a 2nd year Information Technology student at Ngee Ann Polytechnic
            with a long-standing passion for software and full-stack
            development, I'm eager to learn and contribute to meaningful
            projects. I'm seeking a full-time, year-long internship starting in
            March 2024, where I can apply my skills and passion to the tech
            industry.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
