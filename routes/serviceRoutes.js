const express = require("express");
const router = express.Router();

const {
  getAllServices,
  getServiceBySlug,
} = require("../controllers/serviceController");

// Get all services
router.get("/", getAllServices);

// Get single service by slug
router.get("/:slug", getServiceBySlug);

module.exports = router;
