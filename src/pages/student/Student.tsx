import { FaUniversity, FaLaptopCode } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Student = () => {
  const educationData = [
    {
      id: 1,
      institution: "IT center Termez branch",
      degree: "Front-end ( bases )",
      years: "2022 - 2023",
    },
    {
      id: 2,
      institution: "Najot Ta'lim",
      degree: "Full-Stack (Node.js + React) Developer",
      years: "2023 - 2025",
    },
  ];

  return (
    <div className="p-6 md:p-10">
      {/* About Me Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        About Me
      </h2>
      <p className="text-sm md:text-base text-gray-600 mb-2">
        My name is <b>Alouddin Xonimqulov</b>. I was born on
        March 6, 1996, in Termez district, Surxondaryo region. I am a calm and
        disciplined person who highly values order and discipline. I always set
        ambitious goals for myself and strive to overcome any obstacles with
        determination and hard work. 
      </p>
      <p className="text-sm md:text-base text-gray-600 mb-14">
        My father played a significant role in guiding me into the world of
        programming, and thanks to his support, I have achieved my current
        results. My ultimate goal is to become a highly skilled specialist in my
        field, contribute significantly to my company, and benefit my nation by
        becoming an expert developer.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        My Education & Specializations
      </h2>

      {/* Education Section */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white shadow-md rounded-lg p-4 md:p-5 border-l-4 border-blue-500"
          >
            <h3 className="text-lg md:text-2xl font-semibold text-gray-700 flex items-center">
              <FaUniversity className="mr-2 text-blue-600" />
              {edu.institution}
            </h3>
            <p className="text-sm md:text-base text-gray-600">{edu.degree}</p>
            <p className="text-xs md:text-sm text-gray-500">{edu.years}</p>
          </div>
        ))}
      </div>

      {/* Programming Skills */}
      <div className="mt-10">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-700 flex items-center">
          <FaLaptopCode className="mr-2 text-green-600" />
          My Programming Skills
        </h3>
        <ul className="mt-4 list-disc pl-4 md:pl-6 text-sm md:text-base text-gray-600 space-y-2">
          <li>Full-Stack Development (Node.js + React)</li>
          <li>Database Management (PostgreSQL, MongoDB, MySQL)</li>
          <li>Backend Development (NestJS, Express.js, REST API, GraphQL)</li>
          <li>Frontend Development (React, Tailwind CSS, Redux Toolkit)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Deployment & CI/CD (Docker, Vercel, Netlify)</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="mt-10">
        <h3 className="text-lg md:text-2xl font-semibold text-gray-700 flex items-center">
          <MdWork className="mr-2 text-yellow-600" />
          My Work Experience
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          While I may not have formal work experience, during my studies, I have
          worked on multiple real-world projects that can be practically
          implemented. These include e-commerce platforms, CRM systems, and API
          service projects. You can explore my practical work on my GitHub page.
        </p>

        <h3 className="text-lg md:text-2xl font-semibold text-gray-700 mt-10 flex items-center">
          <MdWork className="mr-2 text-yellow-600" />
          Mening ish tajribam
        </h3>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Rasmiy ish tajribam bo'lmasa-da, o'qish davomida men amalda amalga
          oshirilishi mumkin bo'lgan bir nechta real loyihalar ustida ishladim.
          Bularga elektron tijorat platformalari, CRM tizimlari va API xizmati
          loyihalari kiradi. Mening amaliy ishimni GitHub sahifamda
          o'rganishingiz mumkin.
        </p>
      </div>
    </div>
  );
};

export default Student;
