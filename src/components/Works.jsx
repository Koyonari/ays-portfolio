// Works section
// Import images
import ictreats from "../images/ictreats.png";
import programming from "../images/programming.png";
import devblog from "../images/devblog.png";
import band from "../images/band.png";

function Works() {
  return (
    <section className="works mb-12" id="works">
      <h2 className="text-9xl font-general-sans mb-16 w-screen ml-6">
        Recent Works.
      </h2>

      <div className="works-container grid gap-12 place-items-center grid-cols-[repeat(auto-fit,_minmax(600px,_1fr))]">
        <div className="works-1">
          <div className="works-box1 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
            <img
              src={band}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="Fictional Band Website"
            />
          </div>
          <p className="flex flex-row mb-6">
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3">
              HTML<b className="font-general-sans px-3">·</b>Javascript
              <b className="font-general-sans px-3">·</b>TailwindCSS
            </p>
          </p>
          <h3 className="link-hover text-4xl font-general-sans uppercase inline-block cursor-pointer">
            Portfolio
          </h3>
          <p className="mt-3 text-3xl">Front-End Development</p>
        </div>

        <div className="works-2">
          <div className="works-box2 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
            <img
              src={ictreats}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="I.C.Treats"
            />
          </div>
          <p className="flex flex-row mb-6">
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3 mr-4">
              2024
            </p>
            <p className="mt-3 text-2xl border-stone-700 border-[4px] rounded-full p-3">
              HTML<b className="font-general-sans px-3">·</b>CSS
              <b className="font-general-sans px-3">·</b>Javascript
            </p>
          </p>
          <h3 className="link-hover text-4xl font-general-sans uppercase inline-block cursor-pointer">
            NutriAID
          </h3>
          <p className="mt-3 text-3xl">Full-Stack Development</p>
        </div>

        <div className="works-3">
          <div className="works-box3 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
            <img
              src={programming}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="Programming Projects"
            />
          </div>
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

        <div className="works-4">
          <div className="works-box4 flex justify-center items-center rounded-[20px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mb-4">
            <img
              src={devblog}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="Front-End Weekly Dev Blog"
            />
          </div>
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
