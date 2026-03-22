import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [foodItem, setFoodItem] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const items = await axios.get("http://localhost:5000/api/food/list");
      setFoodItem(items.data.data);
      console.log(items.data.data);
    };
    getItems();
  }, []);

  return (
    <div className="p-2">
      {foodItem.map((item) => {
        return (
          <div className="" key={item._id}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default List;
