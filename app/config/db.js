import "dotenv/config";
import mongoose from "mongoose";
export default function connect() {
  return mongoose.connect(process.env.MONGODB_URL);
}
