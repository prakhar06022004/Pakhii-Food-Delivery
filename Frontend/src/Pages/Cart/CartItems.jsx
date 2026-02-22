import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartItems = ({ item, qty }) => {
  const { addToCart, removeFromCart, completeRemoveCart } =
    useContext(StoreContext);

  const itemCountIncrease = (id) => {
    addToCart(id);
  };

  const itemCountDecrease = (id) => {
    if (qty === 0) return;
    removeFromCart(id);
  };
  return (
    <div className="mt-5 flex items-center justify-between bg-gray-50 py-4 px-2 shadow-2xs select-none">
      <div className="flex items-center gap-4 md:gap-12 flex-nowrap">
        <img
          className="w-16 h-16 md:w-22 md:h-22 object-cover rounded-2xl shadow-xs shadow-gray-500"
          src={item?.image}
          alt={item?.name}
        />
        <div className="flex flex-col gap-2 text-lg">
          <p className="font-semibold">{item?.name}</p>
          <p className="font-semibold text-orange-500">${item?.price}</p>
        </div>
        <div className="w-65 font-outfit text-lg hidden md:block text-gray-600">
          {item?.description}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center rounded-2xl px-1">
        <div className="flex items-center gap-2 bg-gray-100 mr-4">
          <span
            onClick={() => itemCountDecrease(item._id)}
            className="bg-red-500/10 rounded-full p-1 cursor-pointer"
          >
            <FaMinus className="text-red-500" />
          </span>
          <p className="text-lg">{qty}</p>
          <span
            onClick={() => itemCountIncrease(item._id)}
            className="bg-green-500/10 rounded-full p-1 cursor-pointer"
          >
            <FaPlus className="text-green-400" />
          </span>
        </div>
        <span
          className="cursor-pointer mt-3 sm:mt-0"
          onClick={()=>completeRemoveCart(item._id)}
        >
          <RiDeleteBin6Line size={20} className="text-gray-700" />
        </span>
      </div>
    </div>
  );
};

export default CartItems;
