import express from "express";
import {
  getWomenProducts,
  getMenProducts,
  getShoes,
  getCloths,
  getKidProducts,
  singleProduct
} from "../controllers/controller.allProduct.js";
const router = express.Router();
router.get("/cloths", getCloths);
router.get("/shoes", getShoes);
router.get("/women", getWomenProducts);
router.get("/men", getMenProducts);
router.get("/kids", getKidProducts);
router.get("/product/:id", singleProduct);

export default router;
