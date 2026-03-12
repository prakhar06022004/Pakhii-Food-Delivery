import express from "express";
import { addFood, getFoodList } from "../Controllers/foodController.js";
import upload from "../Middleware/multer.js";
const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getFoodList);
export default foodRouter;
