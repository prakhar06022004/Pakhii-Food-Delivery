import userModel from "../Models/userModel.js";

const addToCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    let { itemId } = req.body;
    if (!user.cartItems[itemId]) {
      user.cartItems[itemId] = 1;
    } else {
      user.cartItems[itemId] += 1;
    }
    user.markModified("cartItems"); // Nested object ke liye zaroori
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Cart item added",
      data: user.cartItems,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Cart add error" });
  }
};
const removeFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    let { itemId } = req.body;

    if (user.cartItems[itemId]) {
      user.cartItems[itemId] -= 1;
      if (user.cartItems[itemId] <= 0) {
        delete user.cartItems[itemId];
      }
    }

    user.markModified("cartItems"); // Nested object ke liye zaroori hai
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Item removed", data: user.cartItems });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Cart remove error" });
  }
};

const completeRemoveFromCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    let { itemId } = req.body;
    delete user.cartItems[itemId];

    user.markModified("cartItems"); // Zaroori hai
    await user.save();

    return res
      .status(200)
      .json({
        success: true,
        message: "Item completely removed",
        data: user.cartItems,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Cart complete remove error" });
  }
};

const accessCart = async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "You can access Cart Page",
      data: user.cartItems,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cart fetch error",
    });
  }
};

export { accessCart, addToCart, removeFromCart, completeRemoveFromCart };
