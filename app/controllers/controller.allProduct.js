import { allProducts } from "../models/allProducts.js";
import { shoeCollections } from "../models/shoeCollection.js";
import { clothCollections } from "../models/clothCollection.js";
const getProducts = async (req, res) => {
  try {
    const AllProducts = await allProducts.find();
    return res.status(200).json(AllProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getShoes = async (req, res) => {
  try {
    const AllProducts = await shoeCollections.find();
    return res.status(200).json(AllProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getCloths = async (req, res) => {
  try {
    const AllProducts = await clothCollections.find();
    return res.status(200).json(AllProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const getOne = await Product.findById(id);
    res.status(200).json(getOne);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export { getProducts, getOneProduct, getShoes, getCloths };
