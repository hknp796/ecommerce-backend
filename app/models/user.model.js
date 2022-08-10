import mongoose from "mongoose";

const user = mongoose.Schema({
  id: String,
  email: String,
  password: String,
  firsName: String,
  lastName: String,
});
export const clothCollections = mongoose.model("user", user);
