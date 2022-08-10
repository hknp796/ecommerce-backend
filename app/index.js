import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors());

app.use(bodyParser.json());
import router from "./routes/route.allProduct.js";
import signUp from "./routes/route.user.js";
// import signUp from "./routes/route.user.js";

app.use("/api", router);
app.use("/login", signUp);

app.get("/api/auth/user", (req, res) => {
  res.send("jelel");
});
export default app;
