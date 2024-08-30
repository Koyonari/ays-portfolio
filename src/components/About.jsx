// About section
import "../css/index.css";
import switchBackground from "../images/switch.webp";

function About() {
  return (
    <section className="hero p-8 flex" data-scroll-section>
      <img
        src={switchBackground}
        alt="Switch"
        loading="lazy"
        className="switch object-cover rounded-full w-[30vw] h-[25vw]"
      />

      <div className="hero-container w-[65vw]" id="about">
        <h2 className="text-[8rem] leading-[8rem] mb-4 font-general-sans">
          <span>About Me</span>
        </h2>
        <p className="text-[1.75rem] leading-loose">
          <span>
            As a second-year Information Technology student at Ngee Ann
            Polytechnic, I've nurtured a keen interest in software development
            and front-end development since my primary school days. Eager to
            learn and grow, I'm constantly seeking opportunities to hone my
            skills and contribute to impactful projects. I'm currently available
            for a full-time year long internship starting March 2024, excited to
            leverage my passion and knowledge in the exciting tech industry.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
