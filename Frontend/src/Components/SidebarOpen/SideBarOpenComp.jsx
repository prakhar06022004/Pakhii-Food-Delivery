import { RxCross2 } from "react-icons/rx";
import { navLinks } from "../NavOptionLinks/NavOptionLinks";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SideBarOpenComp = ({ sidebarOpen, setSidebarOpen }) => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 z-9998 bg-orange-900/10 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar Panel */}
      <div
        className={`
          fixed z-9999 top-0 right-0 h-full w-[72vw] sm:w-[52vw] md:hidden
          bg-white border-l-2 border-orange-200
          flex flex-col shadow-2xl shadow-orange-100
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Orange top strip */}
        <div className="w-full bg-linear-to-r from-orange-400 via-orange-500 to-orange-400" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-orange-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center text-white text-sm">
              🍴
            </div>
            <span className="text-orange-600 font-bold text-sm tracking-wide uppercase">
              Menu
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200
              flex items-center justify-center text-orange-500
              hover:bg-orange-100 transition-all duration-200 active:scale-90"
          >
            <RxCross2 size={14} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {navLinks.map((option, i) => {
              const isActive = menu === option.label;
              return (
                <li
                  key={option.label}
                  className={`transition-all duration-300 ${
                    sidebarOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: sidebarOpen ? `${70 + i * 45}ms` : "0ms" }}
                >
                  <button
                    onClick={() => {
                      setMenu(option.label);
                      navigate(option.path);
                      setSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-2xl
                      text-sm font-semibold tracking-wide text-left
                      transition-all duration-200 group
                      ${isActive
                        ? "bg-orange-500 text-white shadow-md shadow-orange-200"
                        : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                      }
                    `}
                  >
                    {/* Icon box */}
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0
                        transition-transform duration-200 group-hover:scale-110
                        ${isActive
                          ? "bg-white/20 text-white"
                          : "bg-orange-100 text-orange-500"
                        }`}
                    >
                      {option.icon}
                    </span>

                    <span className="flex-1">{option.label}</span>

                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-white opacity-80" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer promo */}
        <div className="px-4 pb-5 pt-3 border-t border-orange-100">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl px-4 py-3 flex items-center gap-3">
            <span className="text-2xl">🛵</span>
            <div>
              <p className="text-orange-600 font-bold text-xs">Fast Delivery</p>
              <p className="text-orange-400 text-[11px]">Order & track live</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarOpenComp;