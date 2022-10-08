import mongoose from "mongoose";
const cartItem = mongoose.Schema({
  product_ids: Array,
  user_id: String,
});
export const cartItems = mongoose.model("cartItems", cartItem);
