const WorkHistoryCard = () => {
  const workHistory = [
    {
      company: "Tech Solutions Inc.",
      role: "Full-Stack Developer",
      title: "Lead Developer on Scalable Web Apps",
      description: [
        "As a Full-Stack developer, I have a solid knowledge of working with Node.js (Express, NestJS) and React.js. I understand how to effectively integrate backend and frontend.",
        "I have experience in creating and optimizing RESTful API and GraphQL services. I am familiar with query optimization and normalization rules in databases such as PostgreSQL, MongoDB.",
        "I work with React.js on the frontend, I have learned to create functional and fast UI using technologies such as Redux Toolkit, RTK Query, Tailwind CSS.",
        "I am familiar with working with Docker, I have experience in containerizing services and orchestrating with Docker Compose.",
        "I understand CI/CD, AWS, and automated deployment processes, and I follow best practices for safe and efficient code delivery.",
      ],
    },
    {
      company: "Innovative Solutions",
      role: "Back-End Developer",
      title: "Optimized Database & API Performance",
      description: [
        "I have a lot of experience working with Node.js, and I have a deep understanding of asynchronous programming, event-driven architecture, and performance optimization.",
        "I am familiar with PostgreSQL and MongoDB, and I have a solid understanding of database optimization and writing efficient queries.",
        "I have a deep understanding of how the NestJS microservice architecture works, and I have an understanding of how to scale and improve system stability.",
        "I have learned to work with WebSockets and real-time notifications, and I understand how to implement them to improve the user experience.",
        "I have experience working with Docker, and I have a good understanding of containerizing applications, orchestrating services with Docker Compose, and isolating environments.",
      ],
    },
    {
      company: "Freelance & Learning",
      role: "Front-End Developer (React.js)",
      title: "My experiences with React.js",
      description: [
        "I have studied the React ecosystem in depth and am familiar with its core concepts. I have a good understanding of component architecture, state management (Redux, Context API), and API integration.",
        "I have also learned to work with Next.js and TypeScript, and am familiar with performance optimization techniques.",
        "I do not have any work experience yet, but I am applying my knowledge to practical projects and am constantly working on development.",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {workHistory.map((job, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row gap-6 border border-gray-200 bg-white p-6 rounded-lg shadow-md"
        >
          {/* Chap qism: Kompaniya va Lavozim */}
          <div className="w-full sm:w-2/5">
            <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{job.company}</h4>
            <span className="text-sm font-medium text-gray-700">{job.role}</span>
          </div>

          {/* O'ng qism: Tajriba va Tushuntirish */}
          <div className="w-full sm:w-3/5">
            <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{job.title}</h4>
            <ul className="text-sm text-gray-700 leading-6 list-disc pl-5">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistoryCard;
