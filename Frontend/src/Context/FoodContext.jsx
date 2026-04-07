import axios from "axios";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { createContext } from "react";

export const FoodContext = createContext(null);
const FoodProvider = ({ children }) => {
  const [isFoodLoading, setIsFoodLoading] = useState(true);
  const [foodListBackend, setFoodListBackend] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const foodData = await axios.get(
          "http://localhost:5000/api/food/list",
          { withCredentials: true },
        );
        setFoodListBackend(foodData?.data?.data);
        console.log(foodData?.data?.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsFoodLoading(false);
      }
    };
    fetchFood();
  }, []);

  const foodContextValue = useMemo(
    () => ({
      foodListBackend,
      setFoodListBackend,
      isFoodLoading,
    }),
    [foodListBackend, isFoodLoading],
  );

  return (
    <FoodContext.Provider value={foodContextValue}>
      {children}
    </FoodContext.Provider>
  );
};
export default FoodProvider;
