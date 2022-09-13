import express from "express";
import { login, signup, userData } from "../controllers/controller.user.js";
import { authentication } from "../controllers/controller.user.js";
const user = express.Router();

user.post("/login", login);
user.post("/signup", signup);
user.get("/user", authentication, userData);

export default user;
