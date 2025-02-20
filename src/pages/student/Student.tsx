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
    <div className="p-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        My Education & Specializations
      </h2>

      {/* O'qigan universitetlar */}
      <div className="space-y-6">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-white shadow-md rounded-lg p-5 border-l-4 border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
              <FaUniversity className="mr-2 text-blue-600" />
              {edu.institution}
            </h3>
            <p className="text-gray-600">{edu.degree}</p>
            <p className="text-gray-500 text-sm">{edu.years}</p>
          </div>
        ))}
      </div>

      {/* Dasturlash bo'yicha tajriba */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
          <FaLaptopCode className="mr-2 text-green-600" />
          My Programming Skills
        </h3>
        <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
          <li>Full-Stack Development (Node.js + React)</li>
          <li>Database Management (PostgreSQL, MongoDB, MySQL)</li>
          <li>Backend Development (NestJS, Express.js, REST API, GraphQL)</li>
          <li>Frontend Development (React, Tailwind CSS, Redux Toolkit)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Deployment & CI/CD (Docker, Vercel, Netlify)</li>
        </ul>
      </div>

      {/* Ish tajribasi */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-700 flex items-center">
          <MdWork className="mr-2 text-yellow-600" />
          Work Experience
        </h3>
        <p className="text-gray-600 mt-2">
          Men Full-Stack dasturchi sifatida bir nechta loyihalarda ishlaganman.
          O‘z ichiga e-commerce, CRM tizimlari va API xizmati loyihalarini
          olgan. GitHub sahifam orqali amaliy ishlarimni ko‘rishingiz mumkin.
        </p>
      </div>
    </div>
  );
};

export default Student;
