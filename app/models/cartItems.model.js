import mongoose from "mongoose";
const cartItem = mongoose.Schema({
  name: String,
  brand: String,
  gender: String,
  category: String,
  price: Number,
  img: Array,
  product_id: String,
  user_id: String,
});
export const cartItems = mongoose.model("cartItems", cartItem);
