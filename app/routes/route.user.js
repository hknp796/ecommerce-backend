import express from "express";
import { login, signup, userData } from "../controllers/controller.user.js";
import { authentication } from "../middleware/authentication.js";
const user = express.Router();

user.post("/login", login);
user.post("/signup", signup);
user.get("/user", authentication, userData);

export default user;
