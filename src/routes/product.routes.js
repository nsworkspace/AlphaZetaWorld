const express = require("express");

const Product = require("../models/product");
const createCatalogController = require("../controllers/catalog.controller");
const requireAdmin = require("../middleware/requireAdmin");

const router = express.Router();

const controller = createCatalogController(Product);

router.get("/", (req, res, next) => {
    if (req.query.status === "inactive" || req.query.status === "all") return requireAdmin(req, res, next);
    next();
}, controller.list);

router.get("/:id", (req, res, next) => {
    if (req.query.status === "inactive" || req.query.status === "all") return requireAdmin(req, res, next);
    next();
}, controller.getById);
router.post("/", requireAdmin, controller.create);
router.patch("/:id", requireAdmin, controller.update);
router.delete("/:id", requireAdmin, controller.remove);

module.exports = router;
