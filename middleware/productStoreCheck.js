const CustomError = require("../errors");
const { Store } = require("../models");
const productStoreCheck = async (req, res, next) => {
  // we will check all of the array id that the product passed in
  const { store } = req.body;
  const stores = await Store.find({ _id: { $in: store } });
  if (stores.length === 0) {
    throw new CustomError.BadRequest("Please provide store id");
  }
  next();
};
module.exports = productStoreCheck;
