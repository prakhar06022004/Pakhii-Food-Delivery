import { IoHomeOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { TiContacts } from "react-icons/ti";

export const navLinks = [
  { label: "Home", path: "/", icon: <IoHomeOutline /> },
  { label: "Menu", path: "/menu", icon: <BiFoodMenu /> },
  { label: "Contact us", path: "/contact", icon: <TiContacts /> },
];
