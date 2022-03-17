import express from "express";
const router = express.Router();

import { getAllProducts } from "../controllers/product.controller.js";

router.route("/products").get(getAllProducts);

export default router;
