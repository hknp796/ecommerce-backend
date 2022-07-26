import mongoose from "mongoose";

const products = mongoose.Schema({
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
export const allProducts = mongoose.model("new-nikes", products);
