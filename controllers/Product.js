const { Product } = require("../models");
const { Store } = require("../models");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products, nbProducts: products.length });
};
const createdProduct = async (req, res) => {
  const newProduct = await Product.create({
    ...req.body,
    store: req.storeList,
  });
  const newID = req.storeList.map((store) => store._id);
  await Store.updateMany(
    { _id: { $in: newID } },
    { $push: { product: newProduct } }
  );
  res.status(StatusCodes.CREATED).json({ product: newProduct });
};
const editProduct = async (req, res) => {
  const { id: _id } = req.params;
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
  const productRemove = await Product.findOneAndRemove({ _id });
  console.log(product);
  const { store } = product;
  await Store.updateMany(
    { _id: { $in: store } },
    { $pull: { product: productRemove } }
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: "Sucess!! The product has been deleted", product });
};

module.exports = {
  getAllProducts,
  createdProduct,
  editProduct,
  removeProduct,
};
