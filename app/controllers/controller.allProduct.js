import { Product } from "../models/allProducts.js";
const getProducts = async (req, res) => {
  try {
    const AllProducts = await Product.find();
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
export { getProducts, getOneProduct };
