import { useContext, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { IoIosSearch } from "react-icons/io";
import { navLinks } from "../NavOptionLinks/NavOptionLinks";
import { FaMicrophone } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { CartContext } from "../../Context/CartContext";
import { AuthContext } from "../../Context/AuthContext";
function Navbar({ setSidebarOpen, setSignInPopUp }) {
  const [isLoading, setIsLoading] = useState(false);

  const [isListening, setIsListening] = useState(false);

  const { cartItems } = useContext(CartContext);

  const { search, setSearch } = useContext(StoreContext);

  const { userData, logout } = useContext(AuthContext);

  const [menu, setMenu] = useState("Home");

  const location = useLocation();

  const navigate = useNavigate();

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.continuous = false;

  const startVoiceSearch = () => {
    setIsListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;

      setSearch(voiceText);
      setIsListening(false);
    };
    //    recognition.onerror = () => {
    //   setIsListening(false);   // error → mic OFF
    // };

    recognition.onend = () => {
      setIsListening(false); // listening khatam → mic OFF
    };
  };

  const getTotalCartCount = () => {
    return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
  };

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
    <div className="sticky top-0 z-999 bg-white pb-2">
      <div className="flex font-outfit md:justify-around justify-between py-3 p-4 items-center select-none ">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-200 shrink-0">
            <span className="text-white font-extrabold text-xl leading-none">
              P
            </span>
          </div>
          <span className="text-xl sm:text-2xl font-extrabold text-orange-500 tracking-tight leading-none whitespace-nowrap">
            Pakhii Delivery
          </span>
        </div>
        <ul className="hidden md:flex gap-10 text-gray-600 whitespace-nowrap">
          {navLinks.map((options) => (
            <li
              onClick={() => {
                setMenu(options.label);
                navigate(options.path);
              }}
              className={navItemClass(options.label)}
            >
              <span>{options.label}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 sm:gap-7 text-gray-600 justify-center items-center">
          <div className="relative" onClick={() => navigate("/cart")}>
            <IoMdCart size={28} className="cursor-pointer" />

            {getTotalCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {getTotalCartCount()}
              </span>
            )}
          </div>
          {!userData ? (
            <button
              className="border border-gray-500 text-gray-600 px-2 py-1 rounded-2xl cursor-pointer hover:bg-gray-200 duration-150 whitespace-nowrap z-99999"
              onClick={() => setSignInPopUp(true)}
            >
              Sign In
            </button>
          ) : (
            <>
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                <p className="text-white text-sm font-bold uppercase">
                  {userData.name.slice(0, 1)}
                </p>
              </div>{" "}
            </>
          )}
          {userData && (
            <button
              className="items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-300 hover:scale-105 active:scale-95 transition-all duration-200 hidden md:block"
              onClick={logout}
            >
              <GrLogout className="text-base" />
            </button>
          )}

          <RxHamburgerMenu
            className="md:hidden cursor-pointer"
            size={25}
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>
      {location.pathname === "/" && (
        <div className="flex items-center justify-center max-w-2xl md:max-w-2xl lg:max-w-4xl m-auto px-4">
          <div className="flex items-center gap-2 p-2 rounded-[10px] w-full shadow-[0_0_10px_rgba(0,0,0,0.15)] bg-white">
            <IoIosSearch size={22} color="gray" />

            <input
              value={search}
              type="search"
              placeholder="Search items..."
              className="outline-none w-full placeholder-gray-700"
              onChange={(e) => setSearch(e.target.value)}
            />

            <FaMicrophone
              size={18}
              className={`cursor-pointer transition-colors duration-200
    ${isListening ? "text-orange-500 animate-pulse" : "text-gray-600"}
  `}
              onClick={startVoiceSearch}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
