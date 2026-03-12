import cloudinary from "../Config/cloudinary.js";
import FoodModel from "../Models/foodModel.js";
import fs from "fs";

const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required!" });
    }

    let cloud_image = await cloudinary.uploader.upload(req.file.path, {
      folder: "foods",
    });

    const foodAdd = await FoodModel.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: cloud_image.secure_url,
    });
    fs.unlinkSync(req.file.path);
    return res.status(201).json({
      success: true,
      message: "Food Added successfully",
      data: foodAdd,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error adding food",
      error: error.message,
    });
  }
};

export { addFood };
