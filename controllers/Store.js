const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Store = require("../models/Store");
const getAllStores = async (req, res) => {
  const stores = await Store.find({});
  res.status(StatusCodes.OK).json({ stores, nbHits: stores.length });
};
const createStore = async (req, res) => {
  const { name: store_name, location } = req.body;
  const store = await Store.create({ store_name, location });
  res.status(StatusCodes.CREATED).json({ store });
};
const getStore = async (req, res) => {
  const { id: _id } = req.params;
  if (!_id) {
    throw new CustomError.BadRequest(`Please provide store ID`);
  }

  const store = await Store.findOne({ _id });
  res.status(StatusCodes.OK).json({ store });
};
module.exports = {
  getAllStores,
  createStore,
  getStore,
};
