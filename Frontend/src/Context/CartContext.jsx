import { createContext } from "react";
import { useState } from "react";
import { useMemo } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { FoodContext } from "./FoodContext";

export const CartContext = createContext(null);
const CartStoreProvider = ({ children }) => {
  const { foodListBackend } = useContext(FoodContext);
  const [cartItems, setCartItems] = useState({});
  const [isCartLoading, setIsCartLoading] = useState(true);

  const addToCart = async (itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      } else {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
    });
    try {
      const addCartItem = await axios.post(
        "http://localhost:5000/api/cart/add",
        { itemId },
        { withCredentials: true },
      );

      console.log(addCartItem.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const cartAccess = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cart/", {
          withCredentials: true,
        });
        setCartItems(res.data.data || {});
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsCartLoading(false);
      }
    };
    cartAccess();
  }, []);

  const removeFromCart = async (itemId) => {
    try {
      setCartItems((prev) => {
        if (!prev[itemId]) return;
        const updateCart = { ...prev, [itemId]: prev[itemId] - 1 };
        if (updateCart[itemId] <= 0) delete updateCart[itemId];
        return updateCart;
      });
      await axios.post(
        "http://localhost:5000/api/cart/removeCount",
        { itemId },
        { withCredentials: true },
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const completeRemoveCart = async (itemId) => {
    try {
      setCartItems((prev) => {
        const updateCart = { ...prev };
        delete updateCart[itemId];
        return updateCart;
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const totalAmount = useMemo(() => {
    let sum = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodListBackend.find(
          (product) => product._id.toString() === item.toString(),
        );
        if (!itemInfo) continue;
        sum += itemInfo.price * cartItems[item];
      }
    }
    return sum;
  }, [cartItems, foodListBackend]);

  useEffect(() => {
    setCartItems((prev) => {
      return Object.fromEntries(
        Object.entries(prev).filter(([id]) =>
          foodListBackend.some((item) => item._id === id),
        ),
      );
    });
  }, [foodListBackend]);

  const CartContextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      completeRemoveCart,
      totalAmount,
      removeFromCart,
      isCartLoading,
    }),
    [cartItems, isCartLoading],
  );

  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartStoreProvider;
