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
    <div className="flex items-center justify-between bg-white rounded-2xl px-4 py-4 shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-200 select-none">
      {/* Left: Image + Info */}
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shadow-sm"
          src={item?.image}
          alt={item?.name}
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-gray-800 text-base leading-tight">
            {item?.name}
          </p>
          <p className="text-orange-500 font-bold text-base">
            ${item?.price * qty}
          </p>
          <p className="text-xs text-gray-400 hidden md:block max-w-xs leading-relaxed line-clamp-2">
            {item?.description}
          </p>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-3">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-1.5">
          <button
            onClick={() => itemCountDecrease(item._id)}
            className="w-6 h-6 flex items-center justify-center bg-red-100 hover:bg-red-200 rounded-full cursor-pointer transition-colors duration-150"
          >
            <FaMinus size={10} className="text-red-500" />
          </button>
          <span className="text-base font-semibold w-5 text-center text-gray-800">
            {qty}
          </span>
          <button
            onClick={() => itemCountIncrease(item._id)}
            className="w-6 h-6 flex items-center justify-center bg-green-100 hover:bg-green-200 rounded-full cursor-pointer transition-colors duration-150"
          >
            <FaPlus size={10} className="text-green-600" />
          </button>
        </div>

        {/* Delete Button */}
        <button
          title="Remove item"
          onClick={() => completeRemoveCart(item._id)}
          className="w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-100 rounded-xl cursor-pointer transition-colors duration-150 group"
        >
          <RiDeleteBin6Line
            size={17}
            className="text-red-400 group-hover:text-red-600 transition-colors duration-150"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
