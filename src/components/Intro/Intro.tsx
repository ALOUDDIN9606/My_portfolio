const Intro = () => {
  return (
    <div className="w-full md:px-4 lg:px-8 flex lg:flex-row items-center justify-between pt-10 bg-gradient-to-r from-gray-100 to-white rounded-lg mb-16 shadow-lg">
      <div className="w-[65%] text-center lg:text-left">
        <h1 className=" text-[36px] md:text-[42px] font-bold mb-5">
          I’m{" "}
          <span className="text-main-yellow">Alouddin Xonimqulov</span>
          <br />
          <span className="text-main-yellow">Full-Stack</span> Developer
        </h1>
        <p className="text-gray-600 leading-7 mb-5 max-w-[500px] mx-auto lg:mx-0">
          Passionate about modern web technologies and scalable architecture. 
          Crafting high-performance applications with a strong coding foundation.
        </p>

        {/* Texnologiyalar ro'yxati */}
        <div className="flex flex-wrap gap-2 md:gap-3 mx-auto lg:mx-0">
          {[
            "Node.js",
            "JavaScript",
            "TypeScript",
            "Nest.js",
            "Express.js",
            "SQL",
            "NoSQL",
            "Docker",
            "PostgreSQL",
            "MongoDB",
            "CI/CD",
            "Nginx",
            "Linux",
            "Git",
            "Swagger",
            "Testing",
            "React",
            "Next.js",
            "Redux Toolkit",
            "Tailwind",
          ].map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-3 py-1 bg-gray-200 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tugma */}
        {/* <button className="mt-6 py-3 px-7 mb-4 rounded-lg text-[16px] md:text-[18px] bg-main-yellow font-medium hover:bg-yellow-600 transition-all">
          I am ready for work.
        </button> */}
      </div>

      {/* Avatar rasmi */}
      <div className="w-[35%]">
        <img
          src="/images/intro.png"
          alt="avatar"
          className="w-full mt-8 lg:mt-0 animate-fadeIn"
        />
      </div>
    </div>
  );
};

export default Intro;
