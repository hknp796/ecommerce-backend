import { allProducts, searches } from "../models/allProducts.js";

const search = async (req, res) => {
  try {
    console.log(req.body);
    let searchWord = req.body.search;

    const items = await allProducts.find({
      gender: new RegExp(searchWord, "i"),
    });
    res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};
export { search };
