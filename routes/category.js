const express = require('express');
const controller = require('../controllers/category.js');
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getByCategoryId);
router.delete("/:id", controller.remove);
router.post("/", controller.create);
router.patch("/:id", controller.update);

module.exports = router;