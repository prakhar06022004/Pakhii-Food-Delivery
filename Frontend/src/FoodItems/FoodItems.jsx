import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FaOpencart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { CartContext } from "../Context/CartContext";

const FoodItems = ({ id, name, price, image, description }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const count = cartItems[id] || 0;

  return (
    <div className="cursor-pointer select-none group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
          ${price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col gap-2">
        {/* Name + Rating */}
        <div className="flex items-center justify-between gap-2">
          <p className="font-bold text-gray-800 text-base leading-snug tracking-tight line-clamp-1">
            {name}
          </p>
          <img
            src={assets.rating_starts}
            className="h-4 w-fit shrink-0"
            alt="rating"
          />
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Cart Controls */}
        <div className="flex items-center justify-between mt-1 pt-3 border-t border-gray-100">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (!cartItems[id]) return;
                removeFromCart(id);
              }}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-red-50 hover:bg-red-100 text-red-500 transition-colors duration-150 active:scale-90"
            >
              <FaMinus size={11} />
            </button>

            <span className="min-w-6 text-center font-bold text-gray-700 text-base tabular-nums">
              {count}
            </span>

            <button
              onClick={() => addToCart(id)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-50 hover:bg-green-100 text-green-500 transition-colors duration-150 active:scale-90"
            >
              <FaPlus size={11} />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(id)}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 shadow-sm hover:shadow-orange-200 hover:shadow-md"
          >
            <span className="hidden sm:inline">Add to Cart</span>
            <FaOpencart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
