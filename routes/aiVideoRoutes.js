const express = require("express");
const router = express.Router();

const { getAiVideo } = require("../controllers/aiVideoController");

router.get("/", getAiVideo);

module.exports = router;
