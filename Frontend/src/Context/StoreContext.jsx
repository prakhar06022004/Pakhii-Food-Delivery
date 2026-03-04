import { createContext, useCallback, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);
const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [signInPopUp, setSignInPopUp] = useState(false);
  const addToCart = useCallback((itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) {
        return { ...prev, [itemId]: 1 };
      } else {
        return { ...prev, [itemId]: prev[itemId] + 1 };
      }
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updateCart = { ...prev, [itemId]: prev[itemId] - 1 };

      if (updateCart[itemId] <= 0) delete updateCart[itemId];
      return updateCart;
    });
  }, []);

  const completeRemoveCart = useCallback((itemId) => {
    setCartItems((prev) => {
      const updateCart = { ...prev };
      delete updateCart[itemId];
      return updateCart;
    });
  }, []);

  const getTotalAmount = () => {
let totalAmount = 0;
for(let item in cartItems) {
  if(cartItems[item] > 0) {
    let itemInfo = food_list.find((product)=>product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    
  }
}
return totalAmount;
  }

  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItems,
    completeRemoveCart,
    search,
    setSearch,
    sidebarOpen,
    setSidebarOpen,
    setSignInPopUp,
    signInPopUp,
    getTotalAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
