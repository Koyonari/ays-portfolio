// Services section
import { useState } from "react";

function Services() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    // Toggle the clicked box's state
    setActiveBox(activeBox === index ? null : index);
  };

  return (
    <div className="services flex p-8">
      <div className="services-left flex-1 w-[50vw]">
        <h2 className="text-[8rem] md:text-[4rem] mb-1 mt-6 font-general-sans">
          Services
        </h2>
        <p>
          I will deliver an experience unlike any other that serves your
          business goals and keeps it ahead of the competition.
        </p>
      </div>
      <div
        className="services-right flex-1 w-full md:w-1/2 pl-0 md:pl-20"
        id="services"
      >
        {services.map((service, index) => (
          <div key={index} className="services-box mb-8">
            <h3
              className="bg-white text-black p-4 rounded-[20px] flex items-center cursor-pointer relative"
              onClick={() => handleBoxClick(index)}
            >
              {service.title}
              <span
                className={`absolute right-[5.5rem] transition ease-in-out duration-1000 ${
                  activeBox === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </h3>
            <p className={`mt-2 ${activeBox === index ? "block" : "hidden"}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Software Development",
    description:
      "Building impactful software tailored to your needs and wants that solves problems quickly and elegantly.",
  },
  {
    title: "Front-End Development",
    description:
      "Crafting elegant interfaces that provide seamless user experiences tailored to your brand with a focus on accessibility and engagement.",
  },
  {
    title: "Web Design",
    description:
      "Creating and tailoring your needs and wants to an engaging and eye-candy experience by enhancing your brand and business goals while using suitable clean and modern typography.",
  },
];

export default Services;
