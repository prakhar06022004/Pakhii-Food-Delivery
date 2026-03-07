import { IoHomeOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";

export const navLinks = [
  { label: "Home", path: "/", icon: <IoHomeOutline /> },
  { label: "Menu", path: "/menu", icon: <BiFoodMenu /> },
  { label: "Mobile-app", path: "/mobileapp", icon: <CiMobile3 /> },
  { label: "Contact us", path: "/contactus", icon: <TiContacts /> },
];
