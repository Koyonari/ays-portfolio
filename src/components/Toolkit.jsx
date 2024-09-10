const Toolkit = () => {
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
      <div className="stack-right lg:w-[55vw] lg:ml-36 xl:ml-40 mt-8 sm:mt-12 lg:mt-0">
        <div className="stack-front">
          <ul className="stack-list text-2xl md:text-4xl lg:text-6xl xl:text-7xl opacity-80 leading-[1.1]">
            <li>{stack_lang.s1}</li>
            <li>{stack_lang.s2}</li>
            <li>{stack_lang.s3}</li>
            <li>{stack_lang.s4}</li>
            <li>{stack_lang.s5}</li>
            <li>{stack_lang.s6}</li>
            <li>{stack_lang.s7}</li>
            <li>{stack_lang.s8}</li>
            <li>{stack_lang.s9}</li>
            <li>{stack_lang.s10}</li>
            <li>{stack_lang.s11}</li>
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
