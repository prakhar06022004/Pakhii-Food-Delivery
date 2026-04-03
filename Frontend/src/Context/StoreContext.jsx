import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
export const StoreContext = createContext(null);
const StoreProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const contextValue = {
    food_list,
    search,
    setSearch,
    sidebarOpen,
    setSidebarOpen,
    setIsLoading,
    isLoading,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
