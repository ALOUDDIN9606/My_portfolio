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
    <div className="w-[calc(100%/3-10px)] text-center mb-5 bg-white flex flex-col items-center py-4 px-4 rounded-lg">
      <span className="text-[75px] mb-5 text-main-yellow">{icon}</span>
      <h4 className="text-xl font-medium mb-3 capitalize">{title}</h4>
      <p className="text-gray-500 text-lg capitalize">{info}</p>
    </div>
  );
};

export default ServiceCard;
