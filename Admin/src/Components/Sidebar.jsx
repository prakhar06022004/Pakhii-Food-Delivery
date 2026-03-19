import { IoIosAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FiBox } from "react-icons/fi";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-end gap-10 sm:w-80 w-20 py-5 border-r min-h-screen border-gray-500"
      onClick={() => {
        navigate("/");
      }}
    >
      <NavLink
        to="/add"
        className={({ isActive }) =>
          `flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2 cursor-pointer select-none ${isActive ? "bg-amber-300 text-gray-800 duration-200 rounded-3xl sm:w-70" : "sm:60 duration-200"}`
        }
        onClick={(e) => {
          e.stopPropagation();
          setActive("add");
        }}
      >
        <IoIosAddCircleOutline size={25} />
        <p className="font-outfit sm:block hidden">Add Items</p>
      </NavLink>
      <NavLink
        to="/list"
        className={({ isActive }) =>
          `flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2 cursor-pointer select-none ${isActive ? "bg-amber-300 text-gray-800 duration-200 rounded-3xl sm:w-70" : "sm:60 duration-200"}`
        }
        onClick={(e) => {
          e.stopPropagation();
          setActive("list");
        }}
      >
        <CiBoxList size={25} />
        <p className="font-outfit sm:block hidden">List Items</p>
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2 cursor-pointer select-none ${isActive ? "bg-amber-300 text-gray-800 duration-200 rounded-3xl sm:w-70" : "sm:60 duration-200"}`
        }
        onClick={(e) => {
          e.stopPropagation();
          setActive("order");
        }}
      >
        <FiBox size={25} />
        <p className="font-outfit sm:block hidden">Orders</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
