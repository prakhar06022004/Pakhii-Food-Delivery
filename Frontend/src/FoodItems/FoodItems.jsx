import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaOpencart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FoodItems = ({ id, name, price, image, description }) => {
  const [itemCount, setItemCount] = useState(0);
  const itemCountIncrease = () => {
    setItemCount((prev) => prev + 1);
  };

  const itemCountDecrease = () => {
    if (itemCount === 0) return;
    setItemCount((prev) => prev - 1);
  };

  return (
    <div className="cursor-pointer select-none">
      <div>
        <img src={image} alt={name} className="rounded-2xl w-full" />
      </div>
      <div className="p-3">
        <div className="md:flex justify-between">
          <p className="font-medium text-lg">{name}</p>
          <img src={assets.rating_starts} className="h-5 w-fit" alt="rating" />
        </div>
        <p>{description}</p>

        <div className="flex mt-2 items-center justify-between">
          <p className="text-amber-500 text-lg mt-1 font-semibold">${price}</p>

          <div className="flex items-center  gap-2">
            <span
              onClick={itemCountDecrease}
              className="bg-red-500/10 rounded-full p-1"
            >
              <FaMinus className="text-red-500" />
            </span>
            <span
              className="flex justify-center items-center gap-2 border rounded-2xl hover:bg-gray-200 duration-150 p-2 md:p-0.5 px-5 md:px-2 whitespace-nowrap"
              onClick={itemCountIncrease}
            >
              <span className="hidden md:block">Add to cart</span>

              <span className="">
                <FaOpencart />
              </span>
            </span>
            <span
              onClick={itemCountIncrease}
              className="bg-green-500/10 rounded-full p-1"
            >
              <FaPlus className="text-green-400" />
            </span>
            <p className="text-2xl">{itemCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
