const ServiceCard = ({
  title,
  info,
  icon,
}: {
  title: string;
  info: string;
  icon: JSX.Element;
}) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[calc(100%/3-10px)] text-center bg-white flex flex-col items-center py-6 px-5 rounded-lg shadow-md border border-gray-200 mb-4">
      <span className="text-[60px] sm:text-[70px] lg:text-[75px] mb-4 text-main-yellow">
        {icon}
      </span>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 capitalize">{title}</h4>
      <p className="text-gray-600 text-sm sm:text-base capitalize">{info}</p>
    </div>
  );
};

export default ServiceCard;
