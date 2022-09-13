import { cartItems } from "../models/cartItems.model.js";

const cartData = async (req, res) => {
  try {
    console.log(req.body, "headers");

    req.body.product_id = req.body._id;
    req.body.user_id = req.user.user._id;
    delete req.body._id;

    const cart = await cartItems.create({
      ...req.body,
    });
    console.log({ cart });
    return res.status(200).json(cart);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

export { cartData };
