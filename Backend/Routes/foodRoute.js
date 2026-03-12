import express from "express";
import { addFood } from "../Controllers/foodController.js";
import upload from "../Middleware/multer.js";
const foodRouter = express.Router();

foodRouter.post("/add",upload.single("image"), addFood);
export default foodRouter;

