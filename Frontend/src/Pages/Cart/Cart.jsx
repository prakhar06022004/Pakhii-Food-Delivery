import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/frontend_assets/assets";
import CartItems from "./CartItems";
function Cart() {
  const { cartItems } = useContext(StoreContext);
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
