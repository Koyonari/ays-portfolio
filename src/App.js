import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="js-scroll">
        <div className="wrapper transition duration-500 ease-in-out h-screen overflow-y-auto overflow-x-hidden perspective1">
          {/* Navbar */}
          <Navbar />
          {/* Parallax */}
          <div className="parallax transition duration-500 ease-in-out relative flex justify-center items-center h-screen">
            <img
              className="absolute inset-0 object-cover z-10"
              src="../images/background.png"
              alt="Background"
            />
            <div className="foreground pt-18 transform translate-z scale-150 z-[-1] grid place-items-center">
              <h1 className="text-[7rem] w-screen mr-9 text-center font-family: 'GeneralSans-Semibold'">
                HI THERE, I'M
                <br />
                <span className="ml-12 font-bold">AN YONG SHYAN</span>
              </h1>
              <p className="w-[40vw] text-xl">
                An aspiring software developer & front-end developer building
                impactful software & crafting elegant interfaces
              </p>
            </div>
          </div>
          {/* About/Hero section */}
          <section className="bg-black px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center">
              <img
                src="./images/switch.webp"
                alt="Switch"
                loading="lazy"
                className="w-full md:w-1/2 md:rounded-full mb-4 md:mb-0"
              />

              <div className="md:w-1/2 px-4 text-white">
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-loose">
                  As a second-year Information Technology student at Ngee Ann
                  Polytechnic, I've nurtured a keen interest in software
                  development and front-end development since my primary school
                  days. Eager to learn and grow, I'm constantly seeking
                  opportunities to hone my skills and contribute to impactful
                  projects. I'm currently available for a full-time position
                  starting March 2024, excited to leverage my passion and
                  knowledge in the exciting tech industry.
                </p>
              </div>
            </div>

            {/* Services section */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
