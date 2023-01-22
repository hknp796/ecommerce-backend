import { allProducts, searches } from "../models/allProducts.js";

const search = async (req, res) => {
  try {
    let search = req.body.search;

    await allProducts.collection.createIndex({
      gender: "text",
      color: "text",
      size: "text",
      category: "text",
    });

    const items = await allProducts.find({
      $text: { $search: search.join(" ") },
    });
    res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};
export { search };
