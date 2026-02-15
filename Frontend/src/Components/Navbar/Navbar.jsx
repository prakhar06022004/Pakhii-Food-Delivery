import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";

function Navbar() {
        const [menu,setMenu] = useState("Home")

    const navItemClass = (item) =>
  `relative cursor-pointer
   after:content-['']
   after:absolute
   after:left-0
   after:-bottom-1
   after:h-[1.5px]
   after:w-full
   after:bg-gray-600
   after:origin-center
   after:transition-transform
   after:duration-300
   ${
     menu === item
       ? "after:scale-x-100"
       : "after:scale-x-0 hover:after:scale-x-100"
   }`;

  return (
    <div className="flex font-outfit justify-around p-2 items-center">
      <div>
        <h2 className="text-3xl text-orange-500 font-bold font-chewy cursor-pointer">
          Pakhii Delivery
        </h2>
      </div>
      <ul className="flex gap-6 text-gray-600">
        <li onClick={()=>setMenu("Home")}
          className={navItemClass("Home")}
        >
          Home
        </li>

       <li onClick={()=>setMenu("Menu")}
          className={navItemClass("Menu")}
        >
          Menu
        </li>
        <li onClick={()=>setMenu("Mobile-app")}
          className={navItemClass("Mobile-app")}
        >
          Mobile-app
        </li>
      <li onClick={()=>setMenu("Contact us")}
          className={navItemClass("Contact us")}
        >
          Contact us
        </li>
      </ul>
      <div className="flex gap-7 text-gray-600 justify-center items-center">
        <CiSearch size={28} />
        <IoMdCart size={28} />
        <button className="border text-gray-600 px-2 py-1 rounded-2xl cursor-pointer hover:bg-gray-400 hover:text-white duration-150">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
