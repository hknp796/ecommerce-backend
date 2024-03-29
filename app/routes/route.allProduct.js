import express from "express";
import {
  getWomenProducts,
  getMenProducts,
  getShoes,
  getCloths,
  getKidProducts,
  singleProduct,
} from "../controllers/controller.allProduct.js";
import { cartData } from "../controllers/cart.controller.js";
import { authentication } from "../middleware/authentication.js";
import { search } from "../controllers/controller.search.js";
const router = express.Router();
router.get("/cloths", getCloths);
router.get("/shoes", getShoes);
router.get("/women", getWomenProducts);
router.get("/men", getMenProducts);
router.get("/kids", getKidProducts);
router.get("/product/:id", singleProduct);
router.post("/cart", authentication, cartData);
router.post("/search", search);

export default router;
