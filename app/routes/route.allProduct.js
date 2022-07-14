import express from "express";
import {
  getOneProduct,
  getProducts,
  getShoes,
  getCloths,
} from "../controllers/controller.allProduct.js";
const router = express.Router();

router.get("/cloths", getShoes);
router.get("/shoes", getCloths);
router.get("/:id", getOneProduct);

export default router;
