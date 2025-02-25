import { FaBook, FaFilePdf, FaRobot } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Node.js + React Full-Stack Kurs",
    price: "$49",
    description: "Dasturchilar uchun to‘liq kurs. Backend va frontendni noldan o‘rganing.",
    icon: <FaBook className="text-blue-600 text-5xl" />,
    url: "https://udemy.com/my-course",
  },
  {
    id: 2,
    title: "Git Cheat Sheet (PDF)",
    price: "Free",
    description: "Eng foydali Git buyruqlari bilan PDF qo‘llanma.",
    icon: <FaFilePdf className="text-red-600 text-5xl" />,
    url: "/downloads/git-cheat-sheet.pdf",
  },
  {
    id: 3,
    title: "Telegram Bot (NestJS + TypeScript)",
    price: "$99",
    description: "Professional darajadagi Telegram bot tayyor backend bilan.",
    icon: <FaRobot className="text-gray-700 text-5xl" />,
    url: "https://github.com/ALOUDDIN9606/telegram-bot",
  },
];

const Shopping = () => {
  return (
    <div className="p-4 sm:p-8 md:p-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">My Products & Services</h2>
      <p className="text-gray-600 mb-10 text-xl text-center">
        Explore my latest courses, books, and ready-made projects.
      </p>

      {/* MEDIA MOSLASHUVCHI DIV */}
      <div className="flex flex-col items-center space-y-8 sm:space-y-10 w-full max-w-3xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="w-full bg-white border-2 rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center max-w-lg">
            <div className="mb-4 text-2xl">{product.icon}</div>
            <h3 className="text-2xl font-semibold">{product.title}</h3>
            <p className="text-gray-700 text-xl">{product.description}</p>
            <p className="font-bold text-xl text-blue-600 mt-2">{product.price}</p>
            <a
              href={product.url}
              target="_blank"
              className="block w-full sm:w-72 mt-4 text-xl bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
