const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload.js');
const controller = require('../controllers/category.js');
const router = express.Router();

router.get("/", passport.authenticate('jwt', {session: false}), controller.getAll);
router.get("/:id", passport.authenticate('jwt', {session: false}), controller.getByCategoryId);
router.delete("/:id", passport.authenticate('jwt', {session: false}), controller.remove);
router.post("/", passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create);
router.patch("/:id", passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update);

module.exports = router;