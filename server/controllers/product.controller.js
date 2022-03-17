import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    res.status(200).json(await Product.find());
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res) => {
  try {
    res.status(200).json(await Product.find({ _id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};
