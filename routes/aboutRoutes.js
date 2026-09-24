const express = require("express");
const router = express.Router();

const { getAbout } = require("../controllers/aboutController");

// Get About page data
router.get("/", getAbout);

module.exports = router;
