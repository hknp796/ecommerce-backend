import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
import router from "./routes/route.allProduct.js";

app.use("/api", router);

app.post('/api/auth/login',(req,res)=>{
    console.log(res);
})
export default app;
