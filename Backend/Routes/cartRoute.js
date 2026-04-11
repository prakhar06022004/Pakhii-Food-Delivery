import {
  accessCart,
  addToCart,
  completeRemoveFromCart,
  removeFromCart,
} from "../Controllers/cartController.js";
import authMiddleware from "../Middleware/jwt.js";
import express from "express";

const cartRouter = express.Router();
cartRouter.get("/", authMiddleware, accessCart);
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/removeCount", authMiddleware, removeFromCart);
cartRouter.post("/completeRemove", authMiddleware, completeRemoveFromCart);
export default cartRouter;
