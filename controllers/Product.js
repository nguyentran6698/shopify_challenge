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
  res.status(StatusCodes.OK).json({ newProduct });
};

const removeProduct = async (req, res) => {
  const { id: _id } = req.params;
  await Product.findByIdAndDelete({ _id });
  res
    .status(StatusCodes.OK)
    .json({ msg: "Sucess!! The product has been deleted" });
};

module.exports = {
  getAllProducts,
  createdProduct,
  editProduct,
  removeProduct,
};
