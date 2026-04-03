import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItems from "../../FoodItems/FoodItems";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const FoodDisplay = ({ category }) => {
  const { search } = useContext(StoreContext);
  const [foodListBackend, setFoodListBackend] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const foodData = await axios.get(
          "http://localhost:5000/api/food/list",
          { withCredentials: true },
        );
        setFoodListBackend(foodData?.data?.data);
        console.log(foodData?.data?.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    response();
  }, []);

  const filterSearch = foodListBackend.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {filterSearch.length === 0 ? (
        <p className="text-center p-10 text-lg text-gray-800">No items found</p>
      ) : (
        <>
          <p className="font-bold text-2xl sm:text-3xl text-gray-700 max-w-6xl m-auto mb-5 -tracking-tight">
            Top dishes near you
          </p>
          <div className="w-full max-w-7xl m-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterSearch?.map((item) => {
              if (category === "All" || category === item.category) {
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
              }
            })}
          </div>
        </>
      )}
    </>
  );
};

export default FoodDisplay;
