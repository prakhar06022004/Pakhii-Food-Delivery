import { useContext } from "react";
import { StoreContext } from "../../../Context/StoreContext";
import FoodItems from "../../../FoodItems/FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="max-w-7xl m-auto grid grid-cols-4 gap-6 mt-2 rounded-2xl">
      {food_list?.map((item) => {
        return (
          <FoodItems
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default FoodDisplay;
