import React from "react";
import ictreats from "../images/works/ictreats.png";
import portfolio from "../images/works/portfolio.png";
import nutriaid from "../images/works/nutriaid.png";
import planhub from "../images/works/planhub.png";

function Works() {
  return (
    <section className="works lg:m-12" id="works">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-general-sans mb-4 md:mb-12 w-screen">
        Recent Works.
      </h2>

      <div className="works-container w-full grid gap-16 place-items-center grid-cols-1 lg:grid-cols-2">
        <div className="works-1 w-full">
          <a href="https://nutriaid-ays.vercel.app/">
            <div className="works-box1 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={nutriaid}
                loading="lazy"
                className="works-img w-4/5 my-7 sm:my-24 mx-4 sm:mx-12 rounded-2xl"
                alt="NutriAID"
              />
            </div>
          </a>

          <div className="flex flex-col sm:flex-row mb-6">
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 custom-scrollbar">
              HTML<b className="font-general-sans px-3">·</b>CSS
              <b className="font-general-sans px-3">·</b>Javascript
              <b className="font-general-sans px-3">·</b>Node.js
            </p>
          </div>
          <a href="https://nutriaid-ays.vercel.app/">
            <h3 className="link-hover text-2xl md:text-4xl font-general-sans uppercase inline-block cursor-pointer">
              NutriAID
            </h3>
          </a>

          <p className="mt-3 text-xl md:text-3xl">Back-End Development</p>
        </div>
        <div className="works-2 w-full">
          <a href="https://github.com/Koyonari/ays-portfolio">
            <div className="works-box2 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={portfolio}
                loading="lazy"
                className="works-img w-4/5 my-7 sm:my-24 mx-4 sm:mx-12 rounded-2xl"
                alt="Portfolio"
              />
            </div>
          </a>

          <div className="flex flex-col sm:flex-row mb-6">
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 z-10 custom-scrollbar">
              HTML<b className="font-general-sans px-3">·</b>Javascript
              <b className="font-general-sans px-3">·</b>TailwindCSS
              <b className="font-general-sans px-3">·</b>React.js
            </p>
          </div>
          <a href="https://github.com/Koyonari/ays-portfolio">
            <h3 className="link-hover text-2xl md:text-4xl font-general-sans uppercase inline-block cursor-pointer">
              Portfolio
            </h3>
          </a>
          <p className="mt-3 text-xl md:text-3xl">Front-End Development</p>
        </div>

        <div className="works-3 w-full">
          <a href="https://github.com/Koyonari/Group03_PRG2Assignment">
            <div className="works-box3 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={ictreats}
                loading="lazy"
                className="works-img w-4/5 my-7 sm:my-24 mx-4 sm:mx-12 rounded-2xl"
                alt="I.C.Treats"
              />
            </div>
          </a>

          <div className="flex flex-col sm:flex-row mb-6">
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 custom-scrollbar">
              C#<b className="font-general-sans px-3">·</b>Spectre Console
            </p>
          </div>
          <a href="https://github.com/Koyonari/Group03_PRG2Assignment">
            <h3 className="link-hover text-2xl md:text-4xl font-general-sans uppercase inline-block cursor-pointer">
              I.C.Treats
            </h3>
          </a>
          <p className="mt-3 text-xl md:text-3xl">Back-End Development</p>
        </div>

        <div className="works-4 w-full">
          <a href="https://github.com/RISHIKEsH12321/MAD24_P01_Team3">
            <div className="works-box4 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={planhub}
                loading="lazy"
                className="works-img w-4/5 my-7 sm:my-24 mx-4 sm:mx-12 rounded-2xl"
                alt="PlanHub"
              />
            </div>
          </a>

          <div className="flex flex-col sm:flex-row mb-6">
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-sm sm:text-xl md:text-2xl lg:text-xl xl:text-2xl border-stone-700 border-[4px] rounded-full p-3 custom-scrollbar">
              Java
            </p>
          </div>
          <a href="https://github.com/RISHIKEsH12321/MAD24_P01_Team3">
            <h3 className="link-hover text-2xl md:text-4xl font-general-sans uppercase inline-block cursor-pointer">
              PlanHub
            </h3>
          </a>
          <p className="mt-3 text-xl md:text-3xl">
            Mobile Application Development
          </p>
        </div>
      </div>
    </section>
  );
}

export default Works;
