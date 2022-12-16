import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
app.use(cors(
    {
        origin:process.env.ORIGIN,
        credentials:true
    }
));

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
