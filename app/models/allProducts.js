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

var searchschema = mongoose.Schema({
  name: String,
  email: String,
  profile: {
    something: String,
    somethingElse: String,
  },
});
export const searches = searchschema.index({
  name: "text",
  "profile.something": "text",
});
