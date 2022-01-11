const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createdProduct,
  editProduct,
  removeProduct,
} = require("../controllers/Product");
const checkStoreMiddleware = require("../middleware/productStoreCheck");
router
  .route("/")
  .get(getAllProducts)
  .post([checkStoreMiddleware], createdProduct);
router.route("/:id").patch(editProduct).delete(removeProduct);

module.exports = router;
