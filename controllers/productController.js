const products = require("../services/productsData");

const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
};

const getProductBySlug = (req, res) => {
  const { slug } = req.params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found.",
    });
  }

  res.status(200).json({
    success: true,
    data: product,
  });
};

module.exports = {
  getAllProducts,
  getProductBySlug,
};
