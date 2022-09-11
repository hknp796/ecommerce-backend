import { cartItems } from "../models/cartItems.model.js";
import { userData } from "./controller.user.js";
const cartData = async (req, res) => {
  try {
    console.log(req.headers, "headers");

    // user = await cartItems.create(req.body.data,user:req.body);

    return res.status(201).json("Added  to cart");
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};

export { cartData };
