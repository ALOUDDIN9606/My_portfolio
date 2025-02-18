const WorkHistoryCard = () => {
    return (
      <div className="space-y-8">
        {/* Job 1 - Full-Stack Developer */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
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
              - Developed and optimized high-performance **RESTful APIs** and **GraphQL** services using **Node.js, NestJS, PostgreSQL**.  
              - Built scalable **React.js** front-end applications with **Redux Toolkit, RTK Query, and Tailwind CSS**.  
              - Led a team of 5+ developers, ensuring best practices in **CI/CD pipelines, Docker, and AWS deployment**.  
            </p>
          </div>
        </div>
  
        {/* Job 2 - Back-End Developer */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
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
              - Designed and optimized **PostgreSQL & MongoDB** databases, reducing query time by 40%.  
              - Built scalable **NestJS microservices** architecture, improving system resilience and reliability.  
              - Implemented **WebSocket and real-time notification services** for enhanced user experience.  
            </p>
          </div>
        </div>
  
        {/* Job 3 - Freelancer */}
        <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
          {/* Left Section: Freelance & Period */}
          <div className="w-full sm:w-2/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Freelance</h4>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 mr-4">Full-Stack Developer</span>
            </div>
          </div>
  
          {/* Right Section: Responsibilities & Achievements */}
          <div className="w-full sm:w-3/5">
            <h4 className="text-xl font-bold mb-2 text-gray-900">Built & Launched 15+ Scalable Web Apps</h4>
            <p className="text-sm text-gray-700 leading-6">
              - Developed and deployed **custom-built e-commerce platforms, SaaS applications, and admin dashboards**.  
              - Worked with **GraphQL, REST APIs, Nginx, and Linux servers** for high availability and performance.  
              - Integrated **Stripe, PayPal, and crypto payment gateways** for seamless transactions.  
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WorkHistoryCard;
  