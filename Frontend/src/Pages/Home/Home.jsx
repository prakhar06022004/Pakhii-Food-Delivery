import { useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/View Menu/Menu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Footer from "../../Components/Footer/Footer";
import { StoreContext } from "../../Context/StoreContext";
import SideBarOpenComp from "../../Components/SidebarOpen/SideBarOpenComp";

function Home() {
  const [category, setCategory] = useState("All");
  const { setSidebarOpen, sidebarOpen } = useContext(StoreContext);
  return (
    <div className="p-2">
      <SideBarOpenComp
        setSidebarOpen={setSidebarOpen}
        sidebarOpen={sidebarOpen}
      />
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} setCategory={setCategory} />
      <Footer />
    </div>
  );
}

export default Home;
