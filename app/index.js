import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
import router from "./routes/route.allProduct.js";
import user from "./routes/route.user.js";
import { createOrder } from "./controllers/controller.payment.js";
import { verifyPayment } from "./controllers/controller.payment.js";
app.use("/api", router);
app.use("/api", user);

app.use("/api/create", createOrder);
app.use("/api/payment", verifyPayment);
export default app;
