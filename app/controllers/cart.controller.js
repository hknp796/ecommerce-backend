import { cartItems } from "../models/cartItems.model.js";

const cartData = async (req, res) => {
  try {
    req.body.user_id = req.user.user._id;

    delete req.body._id;
    console.log(req.body, "headers");

    const cart = await cartItems.create(req.body);

    return res.status(200).json(cart);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

export { cartData };
