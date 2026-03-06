import { RxCross2 } from "react-icons/rx";
import { navLinks } from "../NavOptionLinks/NavOptionLinks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideBarOpenComp = ({ sidebarOpen, setSidebarOpen }) => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();

  return (
    <div
      className={`
        fixed z-9999 top-0 right-0 h-full bg-gray-300 shadow-xl transition-all duration-300 p-5 md:hidden flex flex-col items-center
        ${sidebarOpen ? "w-1/2 sm:w-1/3 translate-x-0" : "w-1/2 translate-x-full"}
      `}
    >
      <div className="flex realtive mt-10 w-full">
        <span
          className="absolute top-5 right-4 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        >
          <RxCross2 size={24} />
        </span>
        <ul className="flex flex-col gap-10 w-full justify-center">
          {navLinks.map((options) => (
            <li
              className="text-lg font-outfit cursor-pointer bg-gray-50 p-2 text-center rounded-2xl"
              onClick={() => {
                setMenu(options.label);
                navigate(options.path);
                setSidebarOpen(false);
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="flex md:hidden">{options.icon}</span>
                {options.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBarOpenComp;
