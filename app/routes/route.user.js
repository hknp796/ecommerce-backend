import express from "express";
import { login, signup } from "../controllers/controller.user.js";
const user = express.Router();

user.post("/login", login);
user.post("/signup", signup);

export default user;
