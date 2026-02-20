import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItems from "../../FoodItems/FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <p className="font-medium text-2xl sm:text-3xl text-gray-800 max-w-6xl m-auto mb-5">
        Top dishes near you
      </p>
      <div className="w-full max-w-7xl m-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list?.map((foodList) => {
          if (category === "All" || category === foodList.category) {
            return (
              <FoodItems
                key={foodList._id}
                id={foodList._id}
                name={foodList.name}
                price={foodList.price}
                description={foodList.description}
                image={foodList.image}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default FoodDisplay;
