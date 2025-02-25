
const WorkHistoryCard = () => {
    return (
      <>
          <div className="space-y-8">

        {/* Job 1 - Full-Stack Developer */}
        <div className="flex flex-col sm:flex-row gap-6 border-2 bg-white p-6 rounded-lg shadow-md">
          {/* Left Section: Company & Period */}
          <div className="w-full sm:w-2/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Tech Solutions Inc.</h4>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-4">Full-Stack Developer</span>
            </div>
          </div>
  
          {/* Right Section: Responsibilities & Achievements */}
          <div className="w-full sm:w-3/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Lead Developer on Scalable Web Apps</h4>
            <p className="text-sm text-gray-700 leading-6">
              - As a Full-Stack developer, I have a solid knowledge of working with Node.js (Express, NestJS) and React.js. I understand how to effectively integrate backend and frontend.
              I have experience in creating and optimizing RESTful API and GraphQL services. I am familiar with query optimization and normalization rules in databases such as PostgreSQL, MongoDB.
              I work with React.js on the frontend, I have learned to create functional and fast UI using technologies such as Redux Toolkit, RTK Query, Tailwind CSS.
              I am familiar with working with Docker, I have experience in containerizing services and orchestrating with Docker Compose.
              I understand CI/CD, AWS, and automated deployment processes, and I follow best practices for safe and efficient code delivery.
            </p>
          </div>
        </div>
  
        {/* Job 2 - Back-End Developer */}
        <div className="flex flex-col sm:flex-row border-2 gap-6 bg-white p-6 rounded-lg shadow-md">
          {/* Left Section: Company & Period */}
          <div className="w-full sm:w-2/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Innovative Solutions</h4>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-4">Back-End Developer</span>
            </div>
          </div>
  
          {/* Right Section: Responsibilities & Achievements */}
          <div className="w-full sm:w-3/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Optimized Database & API Performance</h4>
            <p className="text-sm text-gray-700 leading-6">
              - I have a lot of experience working with Node.js, and I have a deep understanding of asynchronous programming, event-driven architecture, and performance optimization.
              I am familiar with PostgreSQL and MongoDB, and I have a solid understanding of database optimization and writing efficient queries.
              I have a deep understanding of how the NestJS microservice architecture works, and I have an understanding of how to scale and improve system stability.
              I have learned to work with WebSockets and real-time notifications, and I understand how to implement them to improve the user experience.
              I have experience working with Docker, and I have a good understanding of containerizing applications, orchestrating services with Docker Compose, and isolating environments.
            </p>
          </div>
        </div>
  
        {/* Job 3 - Freelancer */}
        <div className="flex flex-col sm:flex-row border-2 gap-6 bg-white p-6 rounded-lg shadow-md">
          {/* Left Section: Freelance & Period */}
          <div className="w-full sm:w-2/5">
  <h4 className="text-xl font-bold mb-2 text-gray-900">Freelance & Learning</h4>
  <div className="flex items-center">
    <span className="text-sm font-medium text-gray-700 mr-4">Front-end Developer (React.js)</span>
  </div>
</div>

{/* Right Section: Skills & Experience */}
<div className="w-full sm:w-3/5">
  <h4 className="text-xl font-bold mb-2 text-gray-900">My experiences with React.js</h4>
  <p className="text-sm text-gray-700 leading-6">
  I have studied the React ecosystem in depth and am familiar with its core concepts. I have a good understanding of component architecture, state management (Redux, Context API), and API integration. I have also learned to work with Next.js and TypeScript, and am familiar with performance optimization techniques. I do not have any work experience yet, but I am applying my knowledge to practical projects and am constantly working on development.
  </p>
</div>

        </div>
      </div>
      </>
    );
  };
  
  export default WorkHistoryCard;
  