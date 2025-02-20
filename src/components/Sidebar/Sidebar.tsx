import { FaFacebookF } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import Progress from "../ui/Progress";
import "./sidebar.css";
import img from "../../assets/images/My-img.jpg"

const Sidebar = () => {
  return (
    <aside className="sidebar w-[22%] h-full overflow-y-auto bg-gradient-to-b from-blue-300 via-gray-300 to-gray-200 p-8 flex flex-col items-center rounded-lg shadow-lg">
      {/* Profile */}
      <img
        src={img}
        alt="My images"
        className="w-3/4 rounded-xl mb-3 border-4 border-slate-400 hover:scale-105 transition-transform duration-300"
      />
      <h2 className="mb-2 text-2xl font-semibold text-gray-800 hover:text-main-yellow transition-colors duration-300">Alouddin Xonimqulov</h2>
      <p className=" text-xl text-gray-700">Full-Stack Developer</p>
      <p className="text-xl text-gray-700">Node.Js/React.Js</p>

      {/* Social Links */}
      <div className="flex w-full gap-x-4 justify-center mb-8">
        {Array(6)
          .map((_, index) => (
            <div
              key={index}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-main-yellow hover:bg-yellow-500 transition-colors duration-300"
            >
              <FaFacebookF className="text-lg text-white" />
            </div>
          ))}
      </div>

      {/* Info */}
      <ul className="flex flex-col w-full mb-8">
        {[
          { label: "Age", value: "28" },
          { label: "Freelance", value: "Available", isAvailable: true },
          { label: "Phone", value: "+998 93 693 41 43" },
          { label: "Address", value: "Tashkent, Uzb" },
        ].map((item, index) => (
          <li key={index} className="flex items-center justify-between mb-3">
            <span className="py-1 px-4 rounded-md bg-main-yellow text-sm">{item.label}</span>
            <span className={item.isAvailable ? "text-green-500" : "text-gray-700"}>{item.value}</span>
          </li>
        ))}
      </ul>

      {/* Languages */}
      <h3 className="mb-2 text-2xl font-medium text-gray-800">Languages</h3>
      <div className="w-full mb-10">
        {[
          { name: "Uzbek", proficiency: "100%" },
          { name: "English", proficiency: "40%" },
          { name: "Rus", proficiency: "60%" },
        ].map((language, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-2 text-lg font-light">
              <span>{language.name}</span>
              <span>{language.proficiency}</span>
            </div>
            <div className="p-[2px] border-2 border-green-600 rounded-2xl">
            <div
                className={`h-[2px] bg-green-400`}
                style={{ width: `${parseInt(language.proficiency)}%` }}
            ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h3 className="mb-2 text-2xl font-medium text-gray-800">Skills</h3>
      <div className="w-full mb-10">
        <h3 className="mb-2 text-xl font-medium text-gray-800">Back-end</h3>
        {[
          { title: "Node.js", width: "85%"},
          { title: "Nest.js", width: "80%" },
          { title: "Express.js", width: "70%" },
          { title: "ORM/ODM", width: "75%" },
          { title: "SQL/MongoDB/PostgreSQL", width: "80%" },
          { title: "Swagger/Postman", width: "70%" },
        ].map((skill, index) => (
          <Progress key={index} title={skill.title} width={skill.width} />
        ))}
      </div>

      <div className="w-full mb-10">
        <h3 className="mb-2 text-xl font-medium text-gray-800">Front-end</h3>
        {[
          { title: "HTML/CSS", width: "90%"},
          { title: "Javascript", width: "85%" },
          { title: "Typescript", width: "70%" },
          { title: "React", width: "80%" },
          { title: "Redux", width: "70%" },
        ].map((skill, index) => (
          <Progress key={index} title={skill.title} width={skill.width} />
        ))}
      </div>

      {/* Extra Skills */}
      <h3 className="mb-4 text-2xl font-medium text-gray-800">Extra Skills</h3>
      <div className="w-full mb-8">
        {[
          "Bootstrap, Tailwind, Sass",
          "React-query, Zustand",
          "React hooks",
        ].map((skill, index) => (
          <div key={index} className="flex items-center mb-3">
            <MdContentCopy className="text-xl text-main-yellow mr-4" />
            <p className="text-lg text-gray-600">{skill}</p>
          </div>
        ))}
      </div>

      <div className="border-b border-gray-400 mb-6 w-full"></div>

      {/* Download CV Button */}
      <a
        href="/files/file.pdf"
        download="My-CV"
        className="block w-full py-3 rounded-lg bg-main-yellow font-semibold uppercase text-center hover:bg-yellow-500 transition-colors duration-300"
      >
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
