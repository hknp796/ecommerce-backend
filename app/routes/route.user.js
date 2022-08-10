import express from "express";
import { signUp } from "../controllers/controller.user.js";
const user = express.Router();

user.post("/login", signUp);
// user.post("/login", login);

export default signUp;
