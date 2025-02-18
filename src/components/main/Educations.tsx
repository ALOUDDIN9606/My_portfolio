import EducationCard from "../ui/EducationCard";
import Title from "../ui/Title";

const Educations = () => {
  return (
    <div className="w-full mb-[70px]">
      <Title
        title="Education"
        info="A summary of my academic background, highlighting key studies and qualifications that shaped my expertise."
      />

      <div className="rounded-lg w-full py-11 px-8 bg-white">
        <EducationCard />
      </div>
    </div>
  );
};

export default Educations;
