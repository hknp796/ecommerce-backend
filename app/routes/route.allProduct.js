import express from "express";
import { getProducts } from "../controllers/controller.allProduct.js";
const product = express.Router();

product.get("/", getProducts);

export default product;
