import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Toolkit = () => {
  const stackRightRef = useRef(null);

  useEffect(() => {
    const stackRightElement = stackRightRef.current;

    // GSAP animation function
    const animateStackRight = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            entry.target.querySelectorAll(".animate-item"),
            {
              opacity: 0,
              y: 100,
              visibility: "hidden",
            },
            {
              opacity: 1,
              y: 0,
              visibility: "visible",
              duration: 0.3,
              stagger: 0.2,
              ease: "power2.out",
            }
          );
          // Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    };

    // Create an IntersectionObserver
    const observer = new IntersectionObserver(animateStackRight, {
      threshold: 0.4,
    });

    if (stackRightElement) {
      observer.observe(stackRightElement);
    }

    return () => {
      if (stackRightElement) {
        observer.unobserve(stackRightElement);
      }
    };
  }, []);

  return (
    <section className="stack flex flex-col lg:flex-row p-4 mb-8 md:mb-10 lg:mb-24">
      <div className="stack-left lg:w-[45vw] lg:ml-24">
        <h2 className="font-general-sans text-5xl md:text-6xl lg:text-8xl xl:text-9xl mb-8">
          Digital Toolkit.
        </h2>
        <p className="text-base md:text-2xl lg:text-3xl xl:text-4xl leading-normal md:leading-relaxed lg:leading-relaxed xl:leading-relaxed">
          My digital toolkit includes a diverse range of programming languages,
          markup languages and frameworks. I am proficient in and have
          experience with the following technologies.
        </p>
      </div>
      <div
        className="stack-right lg:w-[55vw] lg:ml-36 xl:ml-40 mt-8 sm:mt-12 lg:mt-0"
        ref={stackRightRef}
      >
        <div className="stack-front">
          <ul className="stack-list text-2xl md:text-4xl lg:text-6xl xl:text-7xl opacity-80 leading-[1.1]">
            {Object.values(stack_lang).map((lang, index) => (
              <li key={index} className="animate-item invisible">
                {lang}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const stack_lang = {
  s1: "Python",
  s2: "C#",
  s3: "C++",
  s4: "Java",
  s5: "HTML",
  s6: "CSS",
  s7: "JavaScript",
  s8: "Node.js",
  s9: "React.js",
  s10: "TailwindCSS",
  s11: "Bootstrap",
};

export default Toolkit;
