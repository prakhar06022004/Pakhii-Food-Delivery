import { IoIosAddCircleOutline } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { FiBox } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-end gap-10 sm:w-80 w-20 py-5 border-r min-h-screen border-gray-500">
      <div className="flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2">
        <IoIosAddCircleOutline size={25} />
        <p className="font-outfit sm:block hidden">Add Items</p>
      </div>
      <div className="flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2">
        <CiBoxList size={25} />
        <p className="font-outfit sm:block hidden">List Items</p>
      </div>
      <div className="flex sm:w-60 gap-2 shadow-gray-300 border-0 shadow h-fit p-2">
        <FiBox size={25} />
        <p className="font-outfit sm:block hidden">Orders</p>
      </div>
    </div>
  );
};

export default Sidebar;
