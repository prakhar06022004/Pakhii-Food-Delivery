import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }
    if (!validator.isStrongPassword(password)) {
      return res.json({
        success: false,
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      });
    }
    const register = await userModel.findOne({ email });
    if (register) {
      return res.json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      password: hashedPassword,
      email,
    });
    console.log(newUser);
    return res.status(201).json({ success: true, message: "User registered" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (!password) {
      return res
        .status(400)
        .json({ success: false, message: "Password required" });
    }

    const login = await userModel.findOne({ email });

    const isMatch = await bcrypt.compare(password, login.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Password did not match" });
    }
    return res.status(200).json({ success: true, message: "Login successful" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { registerUser, loginUser };
