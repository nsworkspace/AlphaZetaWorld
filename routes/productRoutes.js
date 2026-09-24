const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductBySlug,
} = require("../controllers/productController");

// Get all products
router.get("/", getAllProducts);

// Get single product by slug
router.get("/:slug", getProductBySlug);

module.exports = router;
