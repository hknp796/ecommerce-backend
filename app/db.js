import app from "./index.js";
import mongoose from "mongoose";
const uri =
  "mongodb+srv://harikrishnan:77PPFhaehkPAXKM@ecommerce.b3pnrk3.mongodb.net/?retryWrites=true&w=majority";

const connect = mongoose.connect(uri);
const port = process.env.PORT || 8080;

app.listen(port, async () => {
  console.log(`Listening to port ${port}`);
});
