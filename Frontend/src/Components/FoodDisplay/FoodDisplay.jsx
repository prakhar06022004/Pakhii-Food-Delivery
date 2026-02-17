import { useContext } from "react";
import { StoreContext } from "../../../Context/StoreContext";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      {food_list?.map((foodItems) => (
        <div key={foodItems._id}>
          <p>{foodItems?.name}</p>
          <img src={foodItems?.image} alt={foodItems?.name} />
          <p>{foodItems?.price}</p>
          <p>{foodItems?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodDisplay;
