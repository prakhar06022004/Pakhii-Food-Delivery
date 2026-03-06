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
    <div className="max-w-7xl m-auto bg-gray-100 p-3 rounded-2xl mt-2 min-h-[calc(100vh-70px)]">
      <FaArrowLeftLong
        size={20}
        onClick={() => navigate("/")}
        className="cursor-pointer"
      />
      {Object.values(cartItems).some((qty, idx, arr) => qty > 0) ? (
        <div className="p-2 md:p-5">
          {food_list.map((foodItems) => {
            if (cartItems[foodItems._id] > 0) {
              return (
                <div>
                  <CartItems item={foodItems} qty={cartItems[foodItems._id]} />
                </div>
              );
            }
          })}

          <div className="shadow-2xs md:flex flex-col md:flex-row justify-between p-2 mt-5 w-full">
            <div className="flex flex-col md:w-100 gap-2">
              <div className="w-fit text-gray-700 flex flex-col gap-2 md:hidden">
                <p>If you have a promo code, Enter it here</p>
                <div className="w-full rounded-2xl">
                  <input
                    type="text"
                    placeholder="promo code"
                    className="p-1 bg-gray-200 outline-none text-gray-700"
                  />
                  <button className="bg-gray-700 text-white p-1 w-20 cursor-pointer">
                    Submit
                  </button>
                </div>
              </div>

              <p className="font-outfit font-semibold text-xl mt-5 md:mt-0">
                Cart Totals
              </p>
              <div className="flex justify-between">
                <p className="text-gray-800">Subtotal</p>
                <span>${getTotalAmount()}</span>
              </div>
              <hr className="text-gray-500" />
              <div className="flex justify-between">
                <p className="text-gray-800">Delivery Fee</p>
                <span>${2}</span>
              </div>
              <hr className="text-gray-500" />
              <div className="font-semibold flex justify-between font-mono text-lg">
                <p>Total</p>
                <span>${getTotalAmount()+2}</span>
              </div>
              <button className="w-fit bg-orange-500 text-white py-1.5 px-4 rounded-lg mt-2 cursor-pointer hover:bg-orange-600 duration-150" onClick={()=>navigate("/order")}>
                Proceed to checkout
              </button>
            </div>

            <div className="w-fit text-gray-700 flex-col gap-2 hidden md:flex">
              <p>If you have a promo code, Enter it here</p>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="promo code"
                  className="p-2 bg-gray-200 w-100 outline-none text-gray-700"
                />
                <button className="bg-black text-white p-2 w-20 cursor-pointer">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[calc(100vh-70px)]">
          <p>No items added</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
