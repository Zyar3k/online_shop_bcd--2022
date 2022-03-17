import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.find());
  } catch (error) {}
};
