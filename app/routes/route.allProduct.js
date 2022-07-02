import express from "express";
import { getOneProduct, getProducts } from "../controllers/controller.allProduct.js";
const product = express.Router();

product.get("/allproducts", getProducts);
product.get("/:id",getOneProduct)

export default product;
