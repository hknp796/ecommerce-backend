import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
import product from "./routes/route.allProduct.js";

app.use("/api", product);
export default app;
