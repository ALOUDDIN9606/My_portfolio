const EducationCard = () => {
  const educationData = [
    {
      institution: "IT Center Termiz",
      role: "Front-End Student",
      period: "2022 - 2023 (10 months)",
      certificate: "Front-End Web Development Certification",
      description:
        "I received in-depth training in Front-End Web Development at the Termez branch of IT Center for 10 months under the guidance of qualified instructors. During this course, I mastered HTML, CSS, Bootstrap, SASS, and JavaScript technologies and gained experience in creating user-friendly, fast, and responsive web interfaces. I learned to work with modern UI frameworks and design patterns, focused on ensuring fast page loading and using best practices in code structure. During the course, I had the opportunity to apply my knowledge in practice by working on independent projects.",
    },
    {
      institution: "Najot Ta'lim, Tashkent",
      role: "Full-Stack Developer Student",
      period: "Sen 2023 - 2025 Fev",
      certificate: "Full-Stack (Node.js & React.js) Certification",
      description:
        "I studied the Full-Stack (Node.js and React.js) course for 15 months at the Najot Ta'lim Training Center in Tashkent under the guidance of qualified instructors. During this course, I gained solid knowledge of Node.js, Express.js, NestJS, PostgreSQL, MongoDB, React.js, Redux, and advanced software architecture. By working on real projects, I gained practical experience in creating scalable and high-performance applications. I learned how to effectively implement backend and frontend integration and developed skills in working with technologies such as CI/CD, Docker, and AWS. Having successfully completed the course, I continue my career as a fully qualified Full-Stack developer.",
    },
  ];

  return (
    <div className="space-y-8">
      {educationData.map((edu, index) => (
        <div key={index} className="flex border-2 flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
          {/* Left Section: Institution & Period */}
          <div className="w-full sm:w-2/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">{edu.institution}</h4>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-4">{edu.role}</span>
              <span className="bg-main-yellow text-white text-xs font-semibold py-1 px-3 rounded-lg">
                {edu.period}
              </span>
            </div>
          </div>

          {/* Right Section: Certificate & Description */}
          <div className="w-full sm:w-3/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">{edu.certificate}</h4>
            <p className="text-sm text-gray-700 leading-6">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
