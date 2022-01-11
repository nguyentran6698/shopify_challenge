const { Product } = require("../models");
const { Store } = require("../models");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, nbProducts: products.length });
};
const createdProduct = async (req, res) => {
  const product = await Product.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ product });
};
const editProduct = async (req, res) => {
  const { id: _id } = req.params;
  console.log(req.params);
  const newProduct = await Product.findOneAndUpdate({ _id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!newProduct) {
    throw new CustomError.NotFound(`Can't find the product with ID ${_id}`);
  }
  res.status(StatusCodes.OK).json({ product });
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
