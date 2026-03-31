import express from "express";
import {
  loginUser,
  meData,
  registerUser,
} from "../Controllers/userController.js";
import authMiddleware from "../Middleware/jwt.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", authMiddleware, meData);
export default userRouter;
