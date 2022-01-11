const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  const {};
};
const createdProduct = async (req, res) => {
  res.status(200).json({ msg: "Create Product" });
};
const editProduct = async (req, res) => {
  res.status(200).json({ msg: "eidt product" });
};

const removeProduct = async (req, res) => {
  res.status(200).json({ msg: "delete product" });
};

module.exports = {
  getAllProducts,
  createdProduct,
  editProduct,
  removeProduct,
};
