import { allProducts } from "../models/allProducts.js";
import { shoeCollections } from "../models/shoeCollection.js";
import { clothCollections } from "../models/clothCollection.js";

const getWomenProducts = async (req, res) => {
  try {
    const AllProducts = await allProducts.find();

    const womenProducts = AllProducts.filter((item) => {
      return item.gender === "Women";
    });
    return res.status(200).json(womenProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const getMenProducts = async (req, res) => {
  try {
    const AllProducts = await allProducts.find();

    const menProducts = AllProducts.filter((item) => {
      return item.gender === "Men";
    });
    return res.status(200).json(menProducts);
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
export { getWomenProducts, getMenProducts, getOneProduct, getShoes, getCloths };
