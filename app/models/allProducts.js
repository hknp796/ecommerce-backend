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
  category: String,
  color: String,
  description: String,
  gender: String,
  title: String,
  profile: {
    something: String,
    somethingElse: String,
  },
});
const searches = mongoose.model("searches", searchschema);
searches.createIndexes();
export { searches };
