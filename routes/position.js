const express = require('express');
const controller = require('../controllers/position.js');
const router = express.Router();

router.get("/:categoryId", controller.getById);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;