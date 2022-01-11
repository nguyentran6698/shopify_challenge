const Store = require("../models/Store");
const getAllStores = async (req, res) => {
  res.status(200).send("get all store");
};
const createStore = async (req, res) => {
  res.status(200).send("create store");
};
const getStore = async (req, res) => {
  res.status(200).send("get  store");
};

module.exports = {
  getAllStores,
  createStore,
  getStore,
};
