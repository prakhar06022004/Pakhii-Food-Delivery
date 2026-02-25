import facebook_icon from "../../assets/frontend_assets/facebook_icon.png";
import twitter_icon from "../../assets/frontend_assets/twitter_icon.png";
import linkedin_icon from "../../assets/frontend_assets/linkedin_icon.png";
const Footer = () => {
  return (
    <div className="bg-[#ebebeb] max-w-2xl md:max-w-7xl m-auto p-5 md:p-10 rounded-[5px]">
      <div className="h-fit md:flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-5">
          <div className="">
            <h2 className="text-2xl sm:text-3xl font-bold font-chewy cursor-pointer whitespace-nowrap text-[#ff7a00]">
              Pakhii Delivery
            </h2>
          </div>
          <div className="w-120">
            <p className="font-poppins font-semibold text-gray-700 hidden md:block">
              Pakhi Delivery brings together great taste, quality, and
              convenience in every meal. Our chefs focus on freshness, our team
              ensures timely delivery, and our service is designed for a smooth
              and enjoyable experience...
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 md:gap-2">
          <h1 className="font-semibold text-xl font-outfit ">COMPANY</h1>
          <ul className="flex md:flex-col justify-center items-center gap-3 md:gap-0 font-outfit underline text-gray-800 md:text-lg">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center md:gap-2 items-center font-outfit mt-5">
          <h1 className="font-semibold text-xl font-outfit">GET IN TOUCH</h1>
          <p className="text-gray-800">+91 8295978959</p>
          <p className="text-gray-800">playingprakhar122@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <img
          src={facebook_icon}
          alt="fb_icon"
          className="w-8 h-8 invert brightness-100"
        />
        <img
          src={twitter_icon}
          alt="twitter_icon"
          className="w-8 h-8 invert brightness-100"
        />
        <img
          src={linkedin_icon}
          alt="linkedin_icon"
          className="w-8 h-8 invert brightness-100"
        />
      </div>
      <hr color="white" className="w-full mt-5 text-gray-500" />
      <p className="text-center text-sm text-gray-600 pt-5">
        © 2026 Pakhii Delivery • All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
