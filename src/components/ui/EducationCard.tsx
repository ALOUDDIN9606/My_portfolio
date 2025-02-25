const EducationCard = () => {
  const educationData = [
    {
      institution: "IT Center Termiz",
      role: "Front-End Student",
      period: "2022 - 2023 (10 months)",
      certificate: "Front-End Web Development Certification",
      description:
        "I received in-depth training in Front-End Web Development at the Termez branch of IT Center for 10 months under the guidance of qualified instructors. During this course, I mastered HTML, CSS, Bootstrap, SASS, and JavaScript technologies and gained experience in creating user-friendly, fast, and responsive web interfaces. I learned to work with modern UI frameworks and design patterns, focusing on best coding practices and performance optimization. Throughout the course, I applied my knowledge in practical projects.",
    },
    {
      institution: "Najot Ta'lim, Tashkent",
      role: "Full-Stack Developer Student",
      period: "Sep 2023 - Feb 2025",
      certificate: "Full-Stack (Node.js & React.js) Certification",
      description:
        "I studied Full-Stack (Node.js and React.js) development for 15 months at the Najot Ta'lim Training Center in Tashkent under expert guidance. This course provided deep knowledge of Node.js, Express.js, NestJS, PostgreSQL, MongoDB, React.js, Redux, and software architecture. Working on real-world projects, I gained hands-on experience in building scalable applications. I also developed skills in backend-frontend integration, CI/CD, Docker, and AWS. Upon completing the course, I continue my career as a fully qualified Full-Stack developer.",
    },
  ];

  return (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-start lg:items-center gap-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200"
        >
          {/* Left Section: Institution & Period */}
          <div className="w-full lg:w-2/5">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">{edu.institution}</h4>
            <div className="flex flex-col sm:flex-row sm:items-center mt-2">
              <span className="text-sm font-medium text-gray-700">{edu.role}</span>
              <span className="bg-main-yellow text-white text-xs font-semibold py-1 px-3 rounded-full mt-2 sm:mt-0 sm:ml-3">
                {edu.period}
              </span>
            </div>
          </div>

          {/* Right Section: Certificate & Description */}
          <div className="w-full lg:w-3/5">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{edu.certificate}</h4>
            <p className="text-sm text-gray-700 leading-6">{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
