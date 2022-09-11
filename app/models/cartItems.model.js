import mongoose from "mongoose";

const cartItem = mongoose.Schema({
  _id: String,
  name: String,
  brand: String,
  gender: String,
  category: String,
  price: Number,
  is_in_inventory: Boolean,
  items_left: Number,
  imageURL: String,
  slug: String,
});
export const cartItems = mongoose.model("cartItems", cartItem);
