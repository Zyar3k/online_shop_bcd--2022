import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProduct,
} from "../controllers/product.controller.js";

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProduct);

export default router;
