import About from "./components/About";
import Navbar from "./components/Navbar";
import Parallax from "./components/Parallax";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./css/index.css";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="wrapper transition-opacity duration-500 ease-in-out w-screen h-screen perspective-100 overflow-y-auto overflow-x-hidden">
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
          {/* Contact section */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
