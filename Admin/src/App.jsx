import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <Navbar /> <hr />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
