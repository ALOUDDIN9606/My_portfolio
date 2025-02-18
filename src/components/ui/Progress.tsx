import { RiCheckDoubleFill } from "react-icons/ri";

const Progress = ({ title, width }: { title: string; width: string }) => {
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between mb-1 text-lg font-light">
        <span>{title}</span>
        <RiCheckDoubleFill className="text-2xl text-gray-500" />
      </div>
      <div className="p-[2px] border-2 border-red-600 rounded-2xl">
        <div
          className="w-[90%] h-[2px] bg-red-600"
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
