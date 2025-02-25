import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode, FaShoppingBag } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { motion } from "framer-motion";
import "./Nav.css";

const Nav = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenSize < 768;
  // const isTablet = screenSize >= 768 && screenSize < 1024;

  return (
    <div
      className={`fixed z-50 bg-white shadow-lg transition-transform duration-300 ${
        isMobile
          ? "bottom-0 left-0 w-full flex justify-around py-3 border-t border-gray-300"
          : "top-0 right-0 w-[100px] h-full flex flex-col items-center justify-between py-10"
      }`}
    >
      <nav className={`flex ${isMobile ? "w-full justify-around gap-2" : "flex-col mt-14 gap-6"}`}>
  {[
    { to: "/", icon: <RiHome2Fill /> },
    { to: "/work", icon: <FaFileCode /> },
    { to: "/student", icon: <PiStudentBold /> },
    { to: "/shopping", icon: <FaShoppingBag /> },
    { to: "/messages", icon: <IoShareSocialSharp /> },
    { to: "/about", icon: <BiSolidMessage /> },
  ].map(({ to, icon }, index) => (
    <NavLink
      key={index}
      to={to}
      className={({ isActive }) =>
        `relative flex items-center rounded-full justify-center transition-all duration-300 
        ${isMobile ? "w-10 h-10 text-[18px]" : "w-14 h-14 text-[26px]"} 
        ${isActive ? "bg-blue-500 text-white scale-105 shadow-lg" : "bg-gray-600 text-white"}`
      }
    >
      <motion.div animate={{ scale: isMobile ? 1 : 1 }} transition={{ type: "spring", stiffness: 300 }}>
        {icon}
      </motion.div>
    </NavLink>
  ))}
</nav>

    </div>
  );
};

export default Nav;
