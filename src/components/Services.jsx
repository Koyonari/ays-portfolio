// Services section
import { useState } from "react";

function Services() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    // Toggle the clicked box's state
    setActiveBox(activeBox === index ? null : index);
  };

  return (
    <div className="services flex h-[55vh]">
      <div className="services-left w-[45vw] ml-24">
        <h2 className="text-9xl font-extrabold font-general-sans">
          {service_header.title}
        </h2>
        <p className="mt-8 leading-10">{service_header.description}</p>
      </div>
      <div className="services-right w-[55vw] ml-32 mt-12" id="services">
        {services.map((service, index) => (
          <div key={index} className="services-box mb-8">
            <h3
              className="bg-white text-black p-4 rounded-[20px] flex items-center cursor-pointer relative font-extrabold mr-8"
              onClick={() => handleBoxClick(index)}
            >
              {service.title}
              <span
                className={`absolute right-[5.5rem] transition ease-in-out duration-1000 mr-[-4rem] ${
                  activeBox === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </h3>
            <p
              className={`mt-2 ml-4 ${
                activeBox === index ? "block" : "hidden"
              }`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const service_header = {
  title: "Services",
  description:
    "I focus on both front-end and back-end development, crafting elegant interfaces and building impactful software tailored to your needs and wants.",
};

const services = [
  {
    title: "Software Development",
    description:
      "Building impactful software tailored to your needs and wants that solves problems quickly and elegantly.",
  },
  {
    title: "Back-End Development",
    description:
      "Crafting elegant interfaces that provide seamless user experiences tailored to your brand with a focus on accessibility and engagement.",
  },
  {
    title: "Web Development",
    description:
      "Creating and tailoring your needs and wants to an engaging and eye-candy experience by enhancing your brand and business goals while using suitable clean and modern typography.",
  },
];

export default Services;
