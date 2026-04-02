import accessCart from "../Controllers/cartController.js";
import authMiddleware from "../Middleware/jwt.js";
import express from "express";

const cartRouter = express.Router();
cartRouter.get("/", authMiddleware, accessCart);
export default cartRouter;
