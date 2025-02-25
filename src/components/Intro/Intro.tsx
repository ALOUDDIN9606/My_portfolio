const Intro = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between pt-10 bg-white rounded-lg mb-16 shadow-lg">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-[60%] text-center lg:text-left">
        <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold mb-5">
          I’m{" "}
          <span className="text-main-yellow">Alouddin Xonimqulov</span>
          <br />
          <span className="text-main-yellow">Full-Stack</span> Developer
        </h1>
        <p className="text-gray-600 leading-7 mb-5 max-w-[500px] mx-auto lg:mx-0">
          Passionate about modern web technologies and scalable architecture. 
          Crafting high-performance applications with a strong coding foundation.
        </p>

        {/* Technologies List */}
        <div className="flex flex-wrap mb-4 justify-center lg:justify-start gap-2 md:gap-3 mx-auto lg:mx-0">
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

        {/* Button */}
        {/* <button className="mt-6 py-3 px-7 text-[16px] md:text-[18px] bg-main-yellow font-medium hover:bg-yellow-600 transition-all rounded-lg">
          I am ready for work.
        </button> */}
      </div>

      {/* Right Side - Avatar Image */}
      <div className="w-full lg:w-[40%] flex justify-center mt-10 lg:mt-0">
        <img
          src="/images/intro.png"
          alt="avatar"
          className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-full animate-fadeIn"
        />
      </div>
    </div>
  );
};

export default Intro;
