import cloudinary from "../Config/cloudinary.js";
import FoodModel from "../Models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required!",
      });
    }

    const cloud_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "foods",
    });

    const foodAdd = await FoodModel.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: cloud_image.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "Food Added successfully",
      data: foodAdd,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding food",
      error: error.message,
    });
  } finally {
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.log("File delete error:", err);
      });
    }
  }
};

const getFoodList = async (req, res) => {
  try {
    const foodList = await FoodModel.find();
    return res.status(200).json({ success: true, data: foodList });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Error get food",
    });
  }
};

const removeFood = async (req, res) => {
  try {
    const foodRemove = await FoodModel.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "Food removed successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Error removing food",
        error: error.message,
      });
  }
};
export { addFood, getFoodList, removeFood };
