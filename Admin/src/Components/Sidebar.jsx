import { IoIosAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center shrink-0 sm:items-end gap-10 sm:w-70 w-20 py-5 border-r border-orange-200 min-h-screen">
      <NavLink
        to="/add"
        className={({ isActive }) =>
          `flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2 cursor-pointer select-none ${isActive ? "bg-amber-300 text-gray-800 duration-200 rounded-3xl sm:w-65" : "sm:60 duration-200"}`
        }
        
      >
        <IoIosAddCircleOutline size={25} />
        <p className="font-outfit sm:block hidden">Add Items</p>
      </NavLink>
      <NavLink
        to="/list"
        className={({ isActive }) =>
          `flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2 cursor-pointer select-none ${isActive ? "bg-amber-300 text-gray-800 duration-200 rounded-3xl sm:w-65" : "sm:60 duration-200"}`
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CiBoxList size={25} />
        <p className="font-outfit sm:block hidden">List Items</p>
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2 cursor-pointer select-none ${isActive ? "bg-amber-300 text-gray-800 duration-200 rounded-3xl sm:w-65" : "sm:60 duration-200"}`
        }
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FiBox size={25} />
        <p className="font-outfit sm:block hidden">Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
