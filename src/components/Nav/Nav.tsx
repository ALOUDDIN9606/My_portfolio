import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaShoppingBag } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { CgDarkMode } from "react-icons/cg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="w-[100px] h-full bg-gradient-to-b from-blue-200 via-gray-200 to-gray-300 flex flex-col items-center justify-between py-10">
      <CgDarkMode className="text-[38px]" />
      <nav className="flex flex-col">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center mb-6 rounded-full transition-colors duration-300 ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
            }`
          }
        >
          <RiHome2Fill className="text-[22px]" />
        </NavLink>

        {/* Work */}
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center mb-6 rounded-full transition-colors duration-300 ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
            }`
          }
        >
          <FaFileCode className="text-[20px]" />
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center mb-6 rounded-full transition-colors duration-300 ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
            }`
          }
        >
          <PiStudentBold className="text-[25px]" />
        </NavLink>

        {/* Social Media */}
        <NavLink
          to="/social"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center mb-6 rounded-full transition-colors duration-300 ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
            }`
          }
        >
          <FaShoppingBag className="text-[21px]" />
        </NavLink>

        {/* Messages */}
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center mb-6 rounded-full transition-colors duration-300 ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
            }`
          }
        >
          <IoShareSocialSharp className="text-[22px]" />
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center mb-6 rounded-full transition-colors duration-300 ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-600 text-white"
            }`
          }
        >
          <BiSolidMessage className="text-[21px]" />
        </NavLink>
      </nav>
      <span></span>
    </div>
  );
};

export default Nav;
