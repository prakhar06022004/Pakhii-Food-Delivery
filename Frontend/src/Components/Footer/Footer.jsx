import facebook_icon from "../../assets/frontend_assets/facebook_icon.png";
import twitter_icon from "../../assets/frontend_assets/twitter_icon.png";
import linkedin_icon from "../../assets/frontend_assets/linkedin_icon.png";
const Footer = () => {
  return (
    <div className="flex justify-between bg-gray-400 max-w-7xl m-auto p-10 rounded-[5px]">
      <div className="">
        <div>
          <h2 className="text-2xl sm:text-2xl text-orange-500 font-bold font-chewy cursor-pointer whitespace-nowrap">
            Pakhii Delivery
          </h2>
        </div>
        <div className="w-100">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            consequatur eligendi omnis voluptatibus cum, beatae necessitatibus
            facere non quaerat tenetur nesciunt totam temporibus, quasi laborum
            laudantium consequuntur aliquam odit tempore?
          </p>
        </div>
        <div className="flex gap-4">
          <img src={facebook_icon} alt="fb_icon" className="w-8 h-8" />
          <img src={twitter_icon} alt="twitter_icon" className="w-8 h-8" />
          <img src={linkedin_icon} alt="linkedin_icon" className="w-8 h-8" />
        </div>
      </div>
      <div>COMPANY</div>
      <div>GET IN TOUCH</div>
    </div>
  );
};

export default Footer;
