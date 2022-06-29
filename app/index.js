import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import product from "./routes/route.allProduct.js";


const uri =
  "mongodb+srv://harikrishnan:77PPFhaehkPAXKM@ecommerce.b3pnrk3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use("/api", product); // new

  app.listen(5000, () => {
    console.log("Server has started!");
  });
});
