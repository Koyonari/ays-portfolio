// Works section
// Import images
import ictreats from "../images/ictreats.png";
import portfolio from "../images/portfolio.png";
import nutriaid from "../images/nutriaid.png";
import planhub from "../images/planhub.png";

function Works() {
  return (
    <section className="works m-12" id="works">
      <h2 className="text-9xl font-general-sans mb-16 w-screen">
        Recent Works.
      </h2>

      <div className="works-container grid gap-16 place-items-center grid-cols-[repeat(auto-fit,_minmax(600px,_1fr))]">
        <div className="works-1 w-full">
          <a href="https://github.com/Koyonari/ays-portfolio">
            <div className="works-box1 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={portfolio}
                loading="lazy"
                className="works-img w-[35vw] my-24 mx-12 rounded-2xl"
                alt="Portfolio"
              />
            </div>
          </a>

          <p className="flex flex-row mb-6">
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3">
              HTML<b className="font-general-sans px-3">·</b>Javascript
              <b className="font-general-sans px-3">·</b>TailwindCSS
              <b className="font-general-sans px-3">·</b>React.js
            </p>
          </p>
          <h3 className="link-hover text-4xl font-general-sans uppercase inline-block cursor-pointer">
            Portfolio
          </h3>
          <p className="mt-3 text-3xl">Front-End Development</p>
        </div>

        <div className="works-2 w-full">
          <a href="https://nutriaid-ays.vercel.app/">
            <div className="works-box2 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={nutriaid}
                loading="lazy"
                className="works-img w-[35vw] my-24 mx-12 rounded-2xl"
                alt="NutriAID"
              />
            </div>
          </a>

          <p className="flex flex-row mb-6">
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3">
              HTML<b className="font-general-sans px-3">·</b>CSS
              <b className="font-general-sans px-3">·</b>Javascript
              <b className="font-general-sans px-3">·</b>Node.js
            </p>
          </p>
          <h3 className="link-hover text-4xl font-general-sans uppercase inline-block cursor-pointer">
            NutriAID
          </h3>
          <p className="mt-3 text-3xl">Full-Stack Development</p>
        </div>

        <div className="works-3 w-full">
          <a href="https://github.com/Koyonari/Group03_PRG2Assignment">
            <div className="works-box3 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={ictreats}
                loading="lazy"
                className="works-img w-[35vw] my-24 mx-12 rounded-2xl"
                alt="I.C.Treats"
              />
            </div>
          </a>

          <p className="flex flex-row mb-6">
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3">
              C#<b className="font-general-sans px-3">·</b>Spectre Console
            </p>
          </p>
          <h3 className="link-hover text-4xl font-general-sans uppercase inline-block cursor-pointer">
            I.C.Treats
          </h3>
          <p className="mt-3 text-3xl">Back-End Development</p>
        </div>

        <div className="works-4 w-full">
          <a href="https://github.com/RISHIKEsH12321/MAD24_P01_Team3">
            <div className="works-box4 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
              <img
                src={planhub}
                loading="lazy"
                className="works-img w-[35vw] my-24 mx-12 rounded-2xl"
                alt="PlanHub"
              />
            </div>
          </a>

          <p className="flex flex-row mb-6">
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3">
              Java
            </p>
          </p>
          <h3 className="link-hover text-4xl font-general-sans uppercase inline-block cursor-pointer">
            PlanHub
          </h3>
          <p className="mt-3 text-3xl">Mobile Application Development</p>
        </div>
      </div>
    </section>
  );
}

export default Works;
