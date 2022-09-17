import mongoose from "mongoose";
const cartItem = mongoose.Schema({
  product_id: String,
  user_id: String,
});
export const cartItems = mongoose.model("cartItems", cartItem);
