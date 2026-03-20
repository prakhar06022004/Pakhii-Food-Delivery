import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/frontend_assets/assets";
import CartItems from "./CartItems";

function Cart() {
  const { cartItems, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-3 py-4 mt-2 min-h-[calc(100vh-70px)]">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors duration-200 mb-6 group"
      >
        <FaArrowLeftLong
          size={18}
          className="group-hover:-translate-x-1 transition-transform duration-200"
        />
        <span className="text-sm font-medium">Back to Menu</span>
      </button>

      {Object.values(cartItems).some((qty) => qty > 0) ? (
        <div>
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Your Cart 🛒
          </h1>

          {/* Cart Items List */}
          <div className="flex flex-col gap-3">
            {food_list.map((foodItems) => {
              if (cartItems[foodItems._id] > 0) {
                return (
                  <CartItems
                    key={foodItems._id}
                    item={foodItems}
                    qty={cartItems[foodItems._id]}
                  />
                );
              }
            })}
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col md:flex-row gap-6 justify-between">
            {/* Cart Totals */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:w-80 flex flex-col gap-4">
              <p className="font-semibold text-xl text-gray-800">Cart Totals</p>

              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <span className="font-medium text-gray-800">
                  ${getTotalAmount()}
                </span>
              </div>
              <hr className="border-gray-100" />

              <div className="flex justify-between text-gray-600">
                <p>Delivery Fee</p>
                <span className="font-medium text-gray-800">$2.00</span>
              </div>
              <hr className="border-gray-100" />

              <div className="flex justify-between text-gray-900 font-bold text-lg">
                <p>Total</p>
                <span className="text-orange-500">
                  ${getTotalAmount() + 2}
                </span>
              </div>

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold py-3 px-4 rounded-xl mt-1 cursor-pointer transition-all duration-150 shadow-md shadow-orange-200"
                onClick={() => navigate("/order")}
              >
                Proceed to Checkout →
              </button>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:w-80 flex flex-col gap-4 h-fit">
              <p className="font-semibold text-gray-800">Promo Code</p>
              <p className="text-sm text-gray-500">
                Have a discount code? Apply it here.
              </p>
              <div className="flex rounded-xl overflow-hidden border border-gray-200 focus-within:border-orange-400 transition-colors duration-200">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 p-3 bg-gray-50 outline-none text-gray-700 text-sm"
                />
                <button className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-3 text-sm font-medium cursor-pointer transition-colors duration-150">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty Cart State */
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-160px)] gap-4 text-center">
          <div className="text-7xl">🛒</div>
          <p className="text-xl font-semibold text-gray-700">
            Your cart is empty
          </p>
          <p className="text-gray-400 text-sm">
            Add some delicious items to get started!
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-medium transition-colors duration-150 cursor-pointer"
          >
            Browse Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
