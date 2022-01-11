const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createdProduct,
  editProduct,
  removeProduct,
} = require("../controllers/Product");
const uploadImage = require("../controllers/ProductUpload");
const checkStoreMiddleware = require("../middleware/productStoreCheck");
router
  .route("/")
  .get(getAllProducts)
  .post([checkStoreMiddleware], createdProduct);
router.route("/upload").post(uploadImage);
router.route("/:id").patch(editProduct).delete(removeProduct);

module.exports = router;
