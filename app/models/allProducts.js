import mongoose from "mongoose";

const products = mongoose.Schema({
  id: String,
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
export const Product = mongoose.model("new-nike", products);
const homeProducts = mongoose.Schema({
  id: String,
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
export const homeProduct = mongoose.model("homeProducts", homeProducts);
