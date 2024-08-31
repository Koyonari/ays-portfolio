import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: 2023,
  },
  {
    id: 2,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: 2022,
  },
  {
    id: 3,
    title: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    year: 2023,
  },
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mb-28">
      <h1 className="text-9xl font-extrabold font-general-sans mb-24">
        Certifications
      </h1>
      <div className="flex items-center justify-center w-full max-w-2xl">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-black shadow-md hover:bg-white hover:text-black  transition-colors"
        >
          <ChevronLeft size={60} />
        </button>
        <div className="mx-8 p-6 bg-white rounded-lg shadow-md w-full min-w-full">
          <h2 className="text-2xl font-semibold mb-2">
            {certifications[currentIndex].title}
          </h2>
          <p className="text-slate-900 mb-2">
            Issuer: {certifications[currentIndex].issuer}
          </p>
          <p className="text-slate-900">
            Year: {certifications[currentIndex].year}
          </p>
        </div>
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-black shadow-md hover:bg-white hover:text-black transition-colors"
        >
          <ChevronRight size={60} />
        </button>
      </div>
      <div className="mt-4 text-white">
        {currentIndex + 1} of {certifications.length}
      </div>
    </div>
  );
};

export default Certifications;
