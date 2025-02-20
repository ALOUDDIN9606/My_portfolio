import Intro from "../Intro/Intro";
import EducationCard from "../ui/EducationCard";
import Title from "../ui/Title";
import WorkHistoryCard from "../ui/WorkHistoryCard";
import Services from "./Services";


const Educations = () => {
  return (
    <div className="w-full mb-[70px]">
      {/* Intro */}
      <Intro />

      {/* Education */}
      <Title
        title="Education"
        info="A summary of my academic background, highlighting key studies and qualifications that shaped my expertise."
      />

      <div className="rounded-lg w-full py-11 px-8 bg-white">
        <EducationCard />
      </div>

      {/* Services */}
      <Services />

      {/* WorkHistory */}
      <Title
        title="Professional Experience"
        info="A detailed overview of my work history, showcasing my skills, achievements, and contributions in various roles and projects."
      />
      <div className="rounded-lg w-full py-11 px-8 bg-white">
        <WorkHistoryCard />
      </div>

    </div>
  );
};

export default Educations;
