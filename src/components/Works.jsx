// Works section
// Import images
import ictreats from "../images/ictreats.png";
import programming from "../images/programming.png";
import devblog from "../images/devblog.png";
import priceio from "../images/priceio.png";
import band from "../images/band.png";

function Works() {
  return (
    <div className="works" id="works">
      <h2 className="text-9xl font-general-sans mt-32 mb-16 w-screen">
        Recent Works.
      </h2>

      <div className="works-container grid gap-12 place-items-center grid-cols-[repeat(auto-fit,_minmax(600px,_1fr))]">
        <div className="works-1">
          <div className="works-box1 flex justify-center items-center rounded-[20px]">
            <img
              src={band}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="Fictional Band Website"
            />
          </div>
          <h3 className="text-3xl font-semibold mt-4">
            Fictional Band Website
          </h3>
        </div>

        <div className="works-2">
          <div className="works-box2 flex justify-center items-center rounded-[20px]">
            <img
              src={ictreats}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="I.C.Treats"
            />
          </div>
          <h3 className="text-3xl font-semibold mt-4">I.C.Treats</h3>
        </div>

        <div className="works-3">
          <div className="works-box3 flex justify-center items-center rounded-[20px]">
            <img
              src={programming}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="Programming Projects"
            />
          </div>
          <h3 className="text-3xl font-semibold mt-4">Programming Projects</h3>
        </div>

        <div className="works-4">
          <div className="works-box4 flex justify-center items-center rounded-[20px]">
            <img
              src={devblog}
              loading="lazy"
              className="works-img w-[35vw] my-24 mx-12"
              alt="Front-End Weekly Dev Blog"
            />
          </div>
          <h3 className="text-3xl font-semibold mt-4">
            Front-End Weekly Dev Blog
          </h3>
        </div>
      </div>

      <div className="works-center flex justify-center items-center mx-auto w-[90vw] mt-8">
        <div className="works-box5 flex flex-col justify-center items-center">
          <img
            src={priceio}
            loading="lazy"
            className="works-img1 w-full mb-5 rounded-[20px] border-[1.5px] border-white"
            alt="Price.io"
          />
          <h3 className="text-3xl font-semibold mt-4">Price.io</h3>
          <p className="text-center text-2xl mt-2">
            Gamified global inflation tracker aided with the use of an API
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
