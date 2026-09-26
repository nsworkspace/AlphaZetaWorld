const express = require("express");
const { loginAdmin, changeAdminPassword } = require("../controllers/admin.controller");
const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/change-password", requireAdmin, changeAdminPassword);

module.exports = router;
