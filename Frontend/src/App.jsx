import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import { useContext } from "react";
import { StoreContext } from "./Context/StoreContext";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";
import SideBarOpenComp from "../src/Components/SidebarOpen/SideBarOpenComp";
import { AuthContext } from "./Context/AuthContext";
import AboutUs from "./Pages/About Us/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";

function App() {
  const { setSidebarOpen, sidebarOpen } = useContext(StoreContext);
  const { signInPopUp, setSignInPopUp } = useContext(AuthContext);
  return (
    <>
      {signInPopUp && <LoginPopUp setSignInPopUp={setSignInPopUp} />}

      <SideBarOpenComp
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />

      <Navbar setSidebarOpen={setSidebarOpen} setSignInPopUp={setSignInPopUp} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
