import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import { useContext } from "react";
import { StoreContext } from "./Context/StoreContext";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";

function App() {
  const { setSidebarOpen, signInPopUp, setSignInPopUp } =
    useContext(StoreContext);

  return (
    <>
      {signInPopUp && <LoginPopUp setSignInPopUp={setSignInPopUp}/>}
      <div className="min-h-screen">
        <Navbar
          setSidebarOpen={setSidebarOpen}
          setSignInPopUp={setSignInPopUp}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
