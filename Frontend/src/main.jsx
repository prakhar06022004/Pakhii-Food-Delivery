import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "../src/Context/StoreContext.jsx";
import CartStoreProvider from "./Context/CartContext.jsx";
import AuthProvider from "./Context/AuthContext.jsx";
import FoodProvider from "./Context/FoodContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <FoodProvider>
          <AuthProvider>
            <CartStoreProvider>
              <App />
            </CartStoreProvider>
          </AuthProvider>
        </FoodProvider>
      </StoreProvider>
    </BrowserRouter>
  </StrictMode>,
);
