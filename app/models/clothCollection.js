import mongoose from "mongoose";

const cloth = mongoose.Schema({
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
export const clothCollections = mongoose.model("clothcollections", cloth);
