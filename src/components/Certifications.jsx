import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "react-bootstrap/Carousel";
import "../css/certs.scss";

// Import certification images
import ycep from "../images/certs/NYP YCEP 2021 Certificate.png";
import cctfycep from "../images/certs/Central CTF Youth Cyber Exploration Programme 2021 Certificate.png";
import aycep from "../images/certs/AYCEP 2021.jpg";
import brainhack2021 from "../images/certs/Brainhack 2021 Certificate.jpg";
import brainhack2024 from "../images/certs/BrainHack 2024 Certificate.jpg";
import buildingblocs from "../images/certs/BuildingBloCS 2021 Certificate.jpg";
import hackatac from "../images/certs/Hack@AC 2021 Certificate.jpg";
import thc from "../images/certs/THC 2021 Certificate.png";
import tisc from "../images/certs/TISC 2023 Organising Team - TISC 2023 Badge of Participation - 2023-10-13.png";
import scrum from "../images/certs/Professional Scrum Master I.png";
import npkongsi from "../images/certs/Ngee Ann Kongsi Tertiary Study Award.png";
import projectmanagement from "../images/certs/FoundationsofProjectManagement.png";
import restfulcert from "../images/certs/CertificateOfCompletion_Building RESTful APIs with Node.js and Express.png";
import cappliedcert from "../images/certs/CertificateOfCompletion_C Applied Data Structures - An Yong Shyan.png";
import capplied2019cert from "../images/certs/CertificateOfCompletion_C Applied Data Structures 2019.png";
import expresscert from "../images/certs/CertificateOfCompletion_Express Essentials Build Powerful Web Apps with Node.js .png";

const certifications = [
  {
    id: 1,
    image: ycep,
    title: "Youth Cyber Exploration Programme (YCEP)",
    issuer: "CSA",
    year: 2021,
  },
  {
    id: 2,
    image: cctfycep,
    title: "Central CTF Youth Cyber Exploration Programme (CCTF YCEP)",
    issuer: "CSA, Cybint",
    year: 2021,
  },
  {
    id: 3,
    image: aycep,
    title: "Advanced Youth Cyber Exploration Programme (AYCEP)",
    issuer: "CSA, cloudsine",
    year: 2021,
  },
  {
    id: 4,
    image: brainhack2021,
    title: "BrainHack 2021",
    issuer: "DSTA",
    year: 2021,
  },
  {
    id: 5,
    image: brainhack2024,
    title: "BrainHack 2024",
    issuer: "DSTA",
    year: 2024,
  },
  {
    id: 6,
    image: buildingblocs,
    title: "BuildingBloCS 2021",
    issuer: "SIMCC, CTE-STEM, AISG",
    year: 2021,
  },
  {
    id: 7,
    image: hackatac,
    title: "Hack@AC 2021",
    issuer: "CSA",
    year: 2021,
  },
  {
    id: 8,
    image: thc,
    title: "CSA x Elastic Threat Hunting Challenge 2021",
    issuer: "CSA, Elastic",
    year: 2021,
  },
  {
    id: 9,
    image: tisc,
    title: "The InfoSecurity Challenge",
    issuer: "CSIT",
    year: 2023,
  },
  {
    id: 10,
    image: scrum,
    title: "Professional Scrum Master 1 (PSM1)",
    issuer: "Scrum.org",
    year: 2024,
  },
  {
    id: 11,
    image: npkongsi,
    title: "Ngee Ann Kongsi Tertiary Study Award",
    issuer: "Ngee Ann Kongsi",
    year: 2024,
  },
  {
    id: 12,
    image: projectmanagement,
    title: "Foundations of Project Management",
    issuer: "Google, Coursera",
    year: 2024,
  },
  {
    id: 13,
    image: restfulcert,
    title: "Building RESTful APIs with Node.js and Express",
    issuer: "LinkedIn Learning",
    year: 2024,
  },
  {
    id: 14,
    image: cappliedcert,
    title: "C#: Applied Data Structures",
    issuer: "LinkedIn Learning",
    year: 2024,
  },
  {
    id: 15,
    image: capplied2019cert,
    title: "C#: Applied Data Structures (2019)",
    issuer: "LinkedIn Learning",
    year: 2023,
  },
  {
    id: 16,
    image: expresscert,
    title: "Express Essentials: Build Powerful Web Apps with Node.js",
    issuer: "LinkedIn Learning",
    year: 2024,
  },
];

const Certifications = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section
      className={
        "relative w-full flex flex-col items-center justify-center mb-36"
      }
    >
      <h2 className="text-9xl font-extrabold font-general-sans text-white text-center mt-8 mb-20 bold">
        Certifications
      </h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={
          <button className="rounded-full">
            <ChevronLeft size={80} />
          </button>
        }
        nextIcon={
          <button className="rounded-full">
            <ChevronRight size={80} />
          </button>
        }
        className="w-screen"
      >
        {certifications.map((cert, idx) => (
          <Carousel.Item
            key={cert.id}
            className="h-[70vh] flex justify-center items-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="h-[50vh] object-contain mx-auto"
            />
            <Carousel.Caption>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p className="pb-4">{cert.year}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="mt-4 text-white">
        {index + 1} of {certifications.length}
      </div>
    </section>
  );
};

export default Certifications;
