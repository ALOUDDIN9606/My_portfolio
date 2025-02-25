import ServiceCard from "../ui/ServiceCard";
import { FaLaptopCode, FaServer, FaDatabase, FaChartLine, FaCloud, FaCode } from "react-icons/fa";import Title from "../ui/Title";

const Services = () => {
  return (
    <div className="w-full mt-16 mb-[70px]">
      <Title
  title="Services I Offer"
  info="Providing high-quality web development, backend solutions, and modern technology services tailored to your needs."
/>

      <div className="flex flex-wrap justify-between">
      <ServiceCard
          title="Web Development"
          info="Building responsive and modern websites including blogs, e-commerce, and landing pages."
          icon={<FaLaptopCode />}
        />
        <ServiceCard
          title="Backend Development"
          info="Creating secure, scalable, and high-performance backend systems using Node.js, NestJS, ( Express or Sequelize )."
          icon={<FaServer />}
        />
        <ServiceCard
          title="Full-Stack Development"
          info="Building secure, scalable, and high-performance web applications using Node.js, NestJS, Express, Sequelize, and React."
          icon={<FaCode />}
/>

        <ServiceCard
          title="Database Management"
          info="Designing efficient databases with PostgreSQL, MongoDB, and MySQL."
          icon={<FaDatabase />}
        />
        <ServiceCard
          title="SEO & Performance Optimization"
          info="Improving website ranking, performance, and user experience with advanced SEO techniques."
          icon={<FaChartLine />}
        />
        <ServiceCard
          title="Cloud & DevOps"
          info="Deploying applications on cloud platforms like AWS, DigitalOcean, and managing CI/CD pipelines."
          icon={<FaCloud />}
        />
      </div>
    </div>
  );
};

export default Services;
