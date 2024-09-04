const Toolkit = () => {
  return (
    <section className="stack flex mb-28" data-scroll-section>
      <div className="stack-left w-[45vw] ml-24">
        <h2 className="text-9xl font-general-sans mb-16">Digital Toolkit.</h2>
        <p className="text-4xl">
          My digital toolkit includes a diverse range of programming languages,
          markup languages and frameworks. I am proficient in and have
          experience with the following technologies.{" "}
        </p>
      </div>
      <div className="stack-right w-[55vw] ml-40">
        <div className="stack-front">
          <ul className="stack-list text-6xl opacity-80 leading-[1.1]">
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
