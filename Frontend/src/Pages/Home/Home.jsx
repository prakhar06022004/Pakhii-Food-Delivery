import { useState } from "react";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/View Menu/Menu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

function Home() {
    const [category,setCategory] = useState("All")
  return (
    <div className="p-2">
      <Header />
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  );
}

export default Home;
