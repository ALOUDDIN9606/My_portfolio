const Title = ({ title, info }: { title: string; info: string }) => {
  return (
    <div className="text-center mb-[50px]">
      <h2 className="text-4xl font-bold mb-6 mx-auto capitalize">{title}</h2>
      <p className="text-gray-500 leading-6 text-xl max-w-[600px] mx-auto">
        {info}
      </p>
    </div>
  );
};

export default Title;
