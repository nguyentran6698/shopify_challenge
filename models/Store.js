const mongoose = require("mongoose");
const Product = require("./Product");
const StoreSchema = new mongoose.Schema({
  store_name: {
    type: String,
    required: [true, "Please provide store name"],
    unique: true,
  },
  location: {
    type: String,
    required: [true, "Please provide store location"],
  },
});
module.exports = mongoose.model("Store", StoreSchema);
