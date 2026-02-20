import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

function Navbar() {
  const { cartItems } = useContext(StoreContext);

  const getTotalCartCount = () => {
    return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
  };

  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
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
    <div className="flex font-outfit sm:justify-around justify-between py-3 p-4 items-center select-none">
      <div>
        <h2
          className="text-2xl sm:text-2xl text-orange-500 font-bold font-chewy cursor-pointer whitespace-nowrap"
          onClick={() => navigate("/")}
        >
          Pakhii Delivery
        </h2>
      </div>
      <ul className="hidden md:flex gap-10 text-gray-600 whitespace-nowrap">
        <li onClick={() => setMenu("Home")} className={navItemClass("Home")}>
          Home
        </li>

        <li onClick={() => setMenu("Menu")} className={navItemClass("Menu")}>
          Menu
        </li>
        <li
          onClick={() => setMenu("Mobile-app")}
          className={navItemClass("Mobile-app")}
        >
          Mobile-app
        </li>
        <li
          onClick={() => setMenu("Contact us")}
          className={navItemClass("Contact us")}
        >
          Contact us
        </li>
      </ul>
      <div className="flex gap-3 sm:gap-7 text-gray-600 justify-center items-center">
        <CiSearch size={28} className="cursor-pointer" />
        {/* <div className="border py-1 px-2 rounded-2xl w-60 hidden md:flex">
          <CiSearch size={28} className="cursor-pointer" />{" "}
          <input
            type="search"
            placeholder="Search..."
            className="outline-none w-70"
          />
        </div> */}

        <div className="relative" onClick={() => navigate("/cart")}>
          <IoMdCart size={28} className="cursor-pointer" />

          {getTotalCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalCartCount()}
            </span>
          )}
        </div>
        <button className="border border-gray-500 text-gray-600 px-2 py-1 rounded-2xl cursor-pointer hover:bg-gray-200 duration-150 whitespace-nowrap">
          Sign In
        </button>
        <RxHamburgerMenu className="md:hidden cursor-pointer" size={25} />
      </div>
    </div>
  );
}

export default Navbar;
