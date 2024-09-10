import React, { useState } from "react";

function Services() {
  const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (index) => {
    setActiveBox(activeBox === index ? null : index);
  };

  return (
    <section className="services flex flex-col lg:flex-row mb-4 md:mb-10 lg:mb-24 p-4">
      <div className="services-left lg:w-[45vw] lg:ml-24">
        <h2 className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-general-sans">
          {service_header.title}
        </h2>
        <p className="mt-8 text-base md:text-2xl lg:text-3xl xl:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed w-full">
          {service_header.description}
        </p>
      </div>
      <div
        className="services-right lg:w-2/3 h-auto mx-auto lg:mx-0 lg:ml-32 mt-12 lg:mt-24 flex flex-col items-center lg:items-start"
        id="services"
      >
        {services.map((service, index) => (
          <div key={index} className="services-box mb-8">
            <h3
              className="bg-white text-black p-4 rounded-[20px] flex items-center justify-between cursor-pointer relative font-extrabold text-2xl md:text-3xl xl:text-4xl"
              onClick={() => handleBoxClick(index)}
            >
              {service.title}
              <span
                className={`transition-transform duration-300 ease-in-out ${
                  activeBox === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </h3>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                activeBox === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-2 ml-2 sm:ml-4 py-4 text-base md:text-3xl xl:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
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
