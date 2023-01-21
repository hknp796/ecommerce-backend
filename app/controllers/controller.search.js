import { allProducts, searches } from "../models/allProducts.js";

const search = async (req, res) => {
  try {
    console.log(req.body);
    let search = req.body.search;
    // let search = new RegExp(req.body.search, "i");
    // let search = new RegExp(req.body.search, "i");

    const items = await allProducts.aggregate([
      { $match: { color: { $in: search } } },

      // { $match: { size: { $in: search } } },
    ]);

    res.send(items);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
};
export { search };
