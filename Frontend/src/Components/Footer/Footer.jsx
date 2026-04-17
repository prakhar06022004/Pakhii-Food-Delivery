import facebook_icon from "../../assets/frontend_assets/facebook_icon.png";
import twitter_icon from "../../assets/frontend_assets/twitter_icon.png";
import linkedin_icon from "../../assets/frontend_assets/linkedin_icon.png";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="font-outfit bg-linear-to-br from-orange-50 via-white to-orange-50 border-t-2 border-orange-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-12 pb-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 border-b border-orange-100">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 shadow-md shadow-orange-200 shrink-0">
                <span className="text-white font-extrabold text-xl leading-none">
                  P
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-orange-500 tracking-tight whitespace-nowrap">
                Pakhii Delivery
              </h2>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Pakhi Delivery brings together great taste, quality, and
              convenience in every meal. Freshness first, timely delivery
              always.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://www.instagram.com/prakhar_joshi7810/" target="_blank"
                className="w-9 h-9 rounded-full bg-orange-400 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-200 group"
              >
                <FaInstagram className="text-white text-[16px] group-hover: group-hover:opacity-100 transition-all duration-200" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-200 group"
              >
                <img
                  src={twitter_icon}
                  alt="Twitter"
                  className="bg-orange-600 rounded-full opacity-60 group-hover:opacity-100"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/prakhar-joshi-917526317"
                target="_blank"
                className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all duration-200 group"
              >
                <img
                  src={linkedin_icon}
                  alt="LinkedIn"
                  className="bg-orange-600 rounded-full opacity-60 group-hover:opacity-100"
                />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {["Home", "About Us", "Delivery", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <div
                      className="text-gray-600 text-sm font-medium hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group"
                      onClick={() => {
                        item === "Home" && navigate("/");
                        item === "About Us" && navigate("about");
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-orange-300 group-hover:bg-orange-500 transition-colors duration-200"></span>
                      {item}
                    </div>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918295978959"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-200">
                  <svg
                    className="w-4 h-4 text-orange-400 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                +91 8295978959
              </a>
              <a
                href="mailto:playingprakhar122@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-500 transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-200">
                  <svg
                    className="w-4 h-4 text-orange-400 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                playingprakhar122@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-xs text-gray-400">
          <p>
            © 2026{" "}
            <span className="text-orange-400 font-semibold">
              Pakhii Delivery
            </span>{" "}
            • All Rights Reserved
          </p>
          <p className="hidden sm:block">Made with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
