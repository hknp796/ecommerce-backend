import { model } from "../models/allProducts.js";
const getProducts = async (req, res) => {
  try {
    const results = await model.find();
    res.status(200).send(results)
  } catch (err) {
    throw err;
  }
};

export { getProducts };
