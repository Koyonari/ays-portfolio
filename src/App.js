import About from "./components/About";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import ParallaxEffect from "./components/ParallaxEffect";
import Services from "./components/Services";
import Works from "./components/Works";
import "./index.css";

const App = () => {
  ParallaxEffect();

  return (
    <div className="App">
      <div className="js-scroll">
        <div className="wrapper transition-opacity duration-500 ease-in-out w-full h-screen perspective-[100px] overflow-y-auto overflow-x-hidden">
          {/* Navbar */}
          <Navbar />
          {/* Parallax */}
          <Parallax />
          {/* About/Hero section */}
          <section className="text-3xl bg-black text-white rounded-3xl py-8 px-8">
            <About />
            {/* Services section */}
            <Services />
            {/* Works section */}
            <Works />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
