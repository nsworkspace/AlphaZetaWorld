const express = require("express");
const { createContact } = require("../controllers/contact.controller");
const requireAdmin = require("../middleware/requireAdmin");
const { listContacts, updateContactStatus } = require("../controllers/contact.controller");

const router = express.Router();

router.post("/", createContact);
router.get("/", requireAdmin, listContacts);
router.patch("/:id/status", requireAdmin, updateContactStatus);

module.exports = router;
