import express from "express";
import {
  addFood,
  getFoodList,
  removeFood,
} from "../Controllers/foodController.js";
import upload from "../Middleware/multer.js";
const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", getFoodList);
foodRouter.delete("/remove/:id", removeFood);
export default foodRouter;
