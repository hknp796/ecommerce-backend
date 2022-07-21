import express from "express";
import {
  getOneProduct,
  getWomenProducts,
  getMenProducts,
  getShoes,
  getCloths,
} from "../controllers/controller.allProduct.js";
const router = express.Router();
router.get("/cloths", getCloths);
router.get("/shoes", getShoes);
router.get("/women", getWomenProducts);
router.get("/men",getMenProducts)
router.get("/:id", getOneProduct);

export default router;
