const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createdProduct,
  editProduct,
  removeProduct,
} = require("../controllers/Product");

router.route("/").get(getAllProducts).post(createdProduct);
router.route("/:id").patch(editProduct).delete(removeProduct);

module.exports = router;
