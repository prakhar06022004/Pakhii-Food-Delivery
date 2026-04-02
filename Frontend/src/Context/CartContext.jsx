import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { useMemo } from "react";
import axios from "axios";
import { useEffect } from "react";

export const CartContext = createContext(null);

const CartStoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const cartAccess = async () => {
      try {
        const cart = await axios.get("http://localhost:5000/api/cart/", {
          withCredentials: true,
        });
        console.log(cart.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    cartAccess();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      } else {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updateCart = { ...prev, [itemId]: prev[itemId] - 1 };

      if (updateCart[itemId] <= 0) delete updateCart[itemId];
      return updateCart;
    });
  };

  const completeRemoveCart = (itemId) => {
    setCartItems((prev) => {
      const updateCart = { ...prev };
      delete updateCart[itemId];
      return updateCart;
    });
  };

  const totalAmount = useMemo(() => {
    let sum = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        sum += itemInfo.price * cartItems[item];
      }
    }
    return sum;
  }, [cartItems]);

  const CartContextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      completeRemoveCart,
      totalAmount,
      removeFromCart,
    }),
    [cartItems],
  );

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStoreProvider;
