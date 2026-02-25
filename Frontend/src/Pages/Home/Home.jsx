import { useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/View Menu/Menu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Footer from "../../Components/Footer/Footer";
import SidebarOpen from "../../Components/SidebarOpen/SidebarOpen";

function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div className="p-2">
      <SidebarOpen />
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <Footer />
    </div>
  );
}

export default Home;
