const EducationCard = () => {
  const educationData = [
    {
      institution: "IT Center Termiz",
      role: "Front-End Student",
      period: "2022 - 2023 (10 months)",
      certificate: "Front-End Web Development Certification",
      description:
        "Successfully completed a 10-month intensive training program in Front-End Web Development. Gained expertise in HTML, CSS, JavaScript, React, and modern UI frameworks, with a strong focus on responsive design, performance optimization, and scalable architecture.",
    },
    {
      institution: "Najot Ta'lim, Tashkent",
      role: "Full-Stack Developer Student",
      period: "Sen 2023 - 2025 Fev",
      certificate: "Full-Stack (Node.js & React.js) Certification",
      description:
        "Completed an in-depth Full-Stack Development program covering Node.js, Express.js, PostgreSQL, MongoDB, React.js, Redux, and advanced software architecture. Specialized in building scalable, high-performance applications with a strong emphasis on real-world project experience.",
    },
  ];

  return (
    <div className="space-y-8">
      {educationData.map((edu, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
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
