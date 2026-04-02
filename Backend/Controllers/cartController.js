import userModel from "../Models/userModel.js";

const accessCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Login required to access Cart" });
    }
    return res
      .status(200)
      .json({ success: true, message: "You can access the Cart" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Cart access error" });
  }
};
export default accessCart;
