import { FaGithub, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/ALOUDDIN9606",
    icon: <FaGithub className="text-gray-800 group-hover:text-white" />,
    description: "My open-source projects and contributions.",
    bgColor: "bg-gray-800",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://linkedin.com/in/alouddin-xonimqulov",
    icon: <FaLinkedin className="text-blue-700 group-hover:text-white" />,
    description: "Connect with me on LinkedIn.",
    bgColor: "bg-blue-700",
  },
  {
    id: 3,
    name: "Telegram",
    url: "https://t.me/alouddin_xonimqulov",
    icon: <FaTelegram className="text-blue-500 group-hover:text-white" />,
    description: "Message me on Telegram.",
    bgColor: "bg-blue-500",
  },
  {
    id: 4,
    name: "Email",
    url: "mailto:xonimqulovalouddin@gmail.com",
    icon: <FaEnvelope className="text-red-500 group-hover:text-white" />,
    description: "Send me an email.",
    bgColor: "bg-red-500",
  },
];

const ShareSocial = () => {
  return (
    <div className="p-4 sm:p-8 md:p-10">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Let's Connect!</h2>
      <p className="text-gray-600 text-xl mb-10 text-center">
        Feel free to reach out to me on any of these platforms.
      </p>

      {/* MEDIA MOSLASHUVCHI DIV */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center px-5 py-6 sm:py-8 rounded-lg shadow-md transition-transform transform hover:scale-105 ${social.bgColor}`}
          >
            <div className="text-3xl">{social.icon}</div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-white">{social.name}</h3>
              <p className="text-sm text-gray-200">{social.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ShareSocial;
