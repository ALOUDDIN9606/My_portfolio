import Title from "../ui/Title";
import WorkHistoryCard from "../ui/WorkHistoryCard";

const Educations = () => {
  return (
    <div className="w-full mb-[70px]">
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
