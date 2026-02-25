import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import { useContext } from "react";
import { StoreContext } from "./Context/StoreContext";

function App() {
  const { setSidebarOpen } = useContext(StoreContext);

  return (
    <div className="min-h-screen">
      <Navbar setSidebarOpen={setSidebarOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
