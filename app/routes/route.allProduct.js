import express from "express";
import {
  getWomenProducts,
  getMenProducts,
  getShoes,
  getCloths,
  getKidProducts,
} from "../controllers/controller.allProduct.js";
const router = express.Router();
router.get("/cloths", getCloths);
router.get("/shoes", getShoes);
router.get("/women", getWomenProducts);
router.get("/men", getMenProducts);
router.get("/kids", getKidProducts);

export default router;
