import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());

app.use(bodyParser.json());
import router from "./routes/route.allProduct.js";
import user from "./routes/route.user.js";

app.use("/api", router);
app.use("/api", user);

app.get("/api/auth/user", (req, res) => {
  return res.status(200).json("hello");
});
export default app;
