import express from "express";
import { addFood } from "../Controllers/foodController.js";
import multer from "multer";
const foodRouter = express.Router();

foodRouter.post("/add", addFood);
export default foodRouter;
 