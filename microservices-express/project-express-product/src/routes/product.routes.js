const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");
const auth = require("../middlewares/auth.middleware");
const roleMiddleware = require('../middlewares/role.middleware');

router.get("/", auth, controller.getProducts);
router.get("/:id", auth, controller.getProduct);
router.post("/", auth, roleMiddleware, controller.createProduct);
router.put("/:id", auth, roleMiddleware, controller.updateProduct);
router.delete("/:id", auth, roleMiddleware, controller.deleteProduct);

module.exports = router;
